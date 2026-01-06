// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CoreCourses } from '../../services/courses';
import { CoreEventObserver, CoreEvents } from '@singletons/events';
import { CoreSites } from '@services/sites';
import { CoreCoursesDashboard } from '@features/courses/services/dashboard';
import { CoreCourseBlock } from '@features/course/services/course';
import { CoreBlockComponent } from '@features/block/components/block/block';
import { CoreNavigator } from '@services/navigator';
import { CoreCourseHelper } from '@features/course/services/course-helper';
import { CoreBlockDelegate } from '@features/block/services/block-delegate';
import { CoreTime } from '@singletons/time';
import { CoreAnalytics, CoreAnalyticsEventType } from '@services/analytics';
import { Translate } from '@singletons';
import { CorePromiseUtils } from '@singletons/promise-utils';
import { CoreAlerts } from '@services/overlays/alerts';
import { CoreBlockSideBlocksButtonComponent } from '../../../block/components/side-blocks-button/side-blocks-button';
import { CoreSharedModule } from '@/core/shared.module';

import { CoreFilepool } from '@services/filepool';
import { AddonBadges } from '@addons/badges/services/badges';

@Component({
    selector: 'page-core-courses-dashboard',
    templateUrl: 'dashboard.html',
    styleUrls: ['dashboard.scss'],
    standalone: true,
    imports: [
        CoreSharedModule,
        CoreBlockComponent,
        CoreBlockSideBlocksButtonComponent,
    ],
})
export default class CoreCoursesDashboardPage implements OnInit, OnDestroy {

    @ViewChildren(CoreBlockComponent) blocksComponents?: QueryList<CoreBlockComponent>;

    hasMainBlocks = false;
    hasSideBlocks = false;
    searchEnabled = false;
    downloadCourseEnabled = false;
    downloadCoursesEnabled = false;
    userId?: number;
    blocks: Partial<CoreCourseBlock>[] = [];
    loaded = false;

    leaderboard: any[] = [];
    courses: any[] = [];
    selectedCourseId?: number;
    badges: any[] = [];
    hasBadges = false;

    loadedBlock: Partial<CoreCourseBlock> | undefined;
    myPageCourses = 'courses';
    activeCourses: any[] = [];
    courseParticipants: Record<number, any[]> = {};

    protected updateSiteObserver: CoreEventObserver;
    protected logView: () => void;

    constructor() {
        this.updateSiteObserver = CoreEvents.on(CoreEvents.SITE_UPDATED, () => {
            this.searchEnabled = !CoreCourses.isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !CoreCourses.isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !CoreCourses.isDownloadCoursesDisabledInSite();
        }, CoreSites.getCurrentSiteId());

        this.logView = CoreTime.once(async () => {
            await CorePromiseUtils.ignoreErrors(CoreCourses.logView('dashboard'));

            CoreAnalytics.logEvent({
                type: CoreAnalyticsEventType.VIEW_ITEM,
                ws: 'core_my_view_page',
                name: Translate.instant('core.courses.mymoodle'),
                data: { category: 'course', page: 'dashboard' },
                url: '/my/',
            });
        });
    }

    ngOnInit(): void {
        this.searchEnabled = !CoreCourses.isSearchCoursesDisabledInSite();
        this.downloadCourseEnabled = !CoreCourses.isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !CoreCourses.isDownloadCoursesDisabledInSite();

        this.loadContent();
        this.loadCoursesAndLeaderboard();
        this.loadBadges();
    }

    openCourse(course: any): void {
        CoreCourseHelper.openCourse(course);
    }

    async loadParticipantsForActiveCourses(): Promise<void> {
        const site = CoreSites.getRequiredCurrentSite();

        await Promise.all(
            this.activeCourses.map(async (course) => {
                try {
                    const users = await site.read<any[]>('core_enrol_get_enrolled_users', {
                        courseid: course.id,
                    });

                    this.courseParticipants[course.id] = (users || [])
                        .filter((u: any) => !!u.profileimageurl)
                        .slice(0, 6);
                } catch {
                    this.courseParticipants[course.id] = [];
                }
            })
        );
    }

    scrollSlider(amount: number) {
        const slider = document.getElementById("courseSlider");
        if (slider) {
            slider.scrollLeft += amount;
        }
    }

    async showAiComingSoon(): Promise<void> {
        await CoreAlerts.showError(
            'Coming Soon 🚀\nAI Tutor feature is under development. Stay tuned! .....',
        );
    }

    async loadCoursesAndLeaderboard(): Promise<void> {
        try {
            this.courses = await CoreCourses.getUserCourses();

            if (this.courses?.length > 0) {
                this.selectedCourseId = this.courses[0].id;
                await this.loadLeaderboard();
            }

            const categories = await this.getCourseCategories();
            console.log('Categories fetched:', categories);
            const site = CoreSites.getCurrentSite();
            if (!site) {
                console.error('No current site found');
                return;
            }

            this.courses.forEach(async (course) => {
                const category = categories.find(c => c.id === course.categoryid);
                if (category) {
                    course.categoryname = this.decodeHtmlEntities(category.name);
                } else {
                    course.categoryname = 'No Category';
                }
                if (course.courseimage) {
                    const pluginUrl = site.fixPluginfileURL(course.courseimage);

                    let finalUrl = pluginUrl;

                    try {
                        const filePath = await CoreFilepool.downloadUrl(site.getId(), pluginUrl, false);
                        if (filePath) {
                            finalUrl = (window as any).Ionic?.WebView?.convertFileSrc(filePath) || filePath;
                        }
                    } catch (err) {
                        console.error('Error downloading course image', err);
                    }
                    course.imageUrl = finalUrl;
                    console.log(`Final Image URL for Course ${course.id}: ${finalUrl}`);
                } else {
                    course.imageUrl = null;
                }
            });
            this.activeCourses = this.courses;
            await this.loadParticipantsForActiveCourses();
        } catch (error) {
            console.error('Error loading courses:', error);
        }
    }

    async getCourseCategories(): Promise<any[]> {
        const site = CoreSites.getCurrentSite();

        if (!site) {
            console.error('Unable to retrieve the current site.');
            return [];
        }

        const token = site.getToken();
        if (!token) {
            console.error('Unable to retrieve the token.');
            return [];
        }

        try {
            const url = `${site.getURL()}/webservice/rest/server.php?wstoken=${token}&wsfunction=core_course_get_categories&moodlewsrestformat=json`;
            console.log('Fetching Categories from URL:', url);

            const response: any = await fetch(url).then(res => res.json());
            if (Array.isArray(response)) {
                return response;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    }

    async loadLeaderboard(): Promise<void> {
        if (!this.selectedCourseId) {
            this.leaderboard = [];
            return;
        }

        try {
            // Ensure the current site is correctly initialized
            const site = CoreSites.getCurrentSite();
            if (!site) {
                console.error('Error: Unable to get the current site.');
                this.leaderboard = [];
                return;
            }

            // Fetch the dynamic token from the site
            const token = '5cd479470a848090fc5128660e506fae';//site.getToken();
            if (!token) {
                console.error('Error: Unable to retrieve the token.');
                this.leaderboard = [];
                return;
            }

            // Construct the correct URL for the web service call
            const baseUrl = site.getURL();
            const url = `${baseUrl}/webservice/rest/server.php?wstoken=${token}&wsfunction=block_xp_leaderboard_get_leaderboard&moodlewsrestformat=json&courseid=${this.selectedCourseId}`;

            // Make the fetch request
            const response: any = await fetch(url).then(res => res.json());

            // Process the leaderboard data if available
            if (response?.leaderboard?.length) {
            this.leaderboard = response.leaderboard.map((item: any) => ({
                rank: item.rank,
                xp: item.xp,
                username: item.user?.username ?? item.username ?? item.fullname ?? 'Unknown',
                    }));
            } else {
                this.leaderboard = [];
            }

            console.log('XP leaderboard response:', response);

        } catch (error) {
            console.error('Error loading leaderboard:', error);
            this.leaderboard = [];
        }
    }

    getRankColor(rank: number): string {
        switch (rank) {
            case 1: return 'warning';
            case 2: return 'medium';
            case 3: return 'tertiary';
            default: return 'success';
        }
    }

    async loadBadges(): Promise<void> {
        try {
            const site = CoreSites.getRequiredCurrentSite();
            const userId = site.getUserId();

            await AddonBadges.invalidateUserBadges(0, userId).catch(() => {});

            const badges = await AddonBadges.getUserBadges(0, userId);

            this.badges = await Promise.all(badges.map(async (badge: any) => {
                const fileUrl = badge.badgeurl || badge.imageurl || '';
                const pluginUrl = site.fixPluginfileURL(fileUrl);

                let finalUrl = pluginUrl;

                try {
                    const filePath = await CoreFilepool.downloadUrl(site.getId(), pluginUrl, false);
                    if (filePath) finalUrl = (window as any).Ionic?.WebView?.convertFileSrc(filePath) || filePath;
                } catch {}

                return {
                    ...badge,
                    fixedImageUrl: finalUrl,
                };
            }));

            this.hasBadges = this.badges.length > 0;
        } catch (error) {
            console.error('Error loading badges:', error);
            this.badges = [];
            this.hasBadges = false;
        }
    }

    protected async loadContent(): Promise<void> {
        const available = await CoreCoursesDashboard.isAvailable();
        const disabled = await CoreCoursesDashboard.isDisabled();

        if (available && !disabled) {
            this.userId = CoreSites.getCurrentSiteUserId();

            try {
                const blocks = await CoreCoursesDashboard.getDashboardBlocks();

                this.blocks = blocks.mainBlocks;
                this.hasMainBlocks = CoreBlockDelegate.hasSupportedBlock(blocks.mainBlocks);
                this.hasSideBlocks = CoreBlockDelegate.hasSupportedBlock(blocks.sideBlocks);
            } catch (error) {
                CoreAlerts.showError(error);
                this.loadFallbackBlocks();
            }
        } else if (!available) {
            this.loadFallbackBlocks();
        } else {
            this.blocks = [];
        }

        this.loaded = true;
        this.logView();
    }

    decodeHtmlEntities(str: string): string {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return doc.documentElement.textContent || '';
    }

    protected loadFallbackBlocks(): void {
        this.blocks = [
            {
                name: 'myoverview',
                visible: true,
            },
            {
                name: 'timeline',
                visible: true,
            },
        ];

        this.hasMainBlocks = CoreBlockDelegate.isBlockSupported('myoverview') || CoreBlockDelegate.isBlockSupported('timeline');
    }

    refreshDashboard(refresher: HTMLIonRefresherElement): void {
        const promises: Promise<void>[] = [];

        promises.push(CoreCoursesDashboard.invalidateDashboardBlocks());
        promises.push(this.loadLeaderboard());
        promises.push(this.loadBadges());

        this.blocksComponents?.forEach((blockComponent) => {
            promises.push(blockComponent.invalidate().catch(() => {
                // Ignore errors.
            }));
        });

        Promise.all(promises).finally(() => {
            this.loadContent().finally(() => {
                refresher?.complete();
            });
        });
    }

    async openSearch(): Promise<void> {
        CoreNavigator.navigateToSitePath('/courses/list', { params : { mode: 'search' } });
    }

    ngOnDestroy(): void {
        this.updateSiteObserver.off();
    }

}
