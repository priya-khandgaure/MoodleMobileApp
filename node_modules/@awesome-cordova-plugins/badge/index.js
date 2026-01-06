var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var BadgeOriginal = /** @class */ (function (_super) {
    __extends(BadgeOriginal, _super);
    function BadgeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    BadgeOriginal.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    BadgeOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    BadgeOriginal.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    BadgeOriginal.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    BadgeOriginal.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    BadgeOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    BadgeOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    BadgeOriginal.pluginName = "Badge";
    BadgeOriginal.plugin = "cordova-plugin-badge";
    BadgeOriginal.pluginRef = "cordova.plugins.notification.badge";
    BadgeOriginal.repo = "https://github.com/katzer/cordova-plugin-badge";
    BadgeOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return BadgeOriginal;
}(AwesomeCordovaNativePlugin));
var Badge = new BadgeOriginal();
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFkZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnQ2pFLHlCQUEwQjs7OztJQU9uRCxxQkFBSztJQVdMLG1CQUFHLGFBQUMsV0FBbUI7SUFVdkIsbUJBQUc7SUFXSCx3QkFBUSxhQUFDLFVBQWtCO0lBVzNCLHdCQUFRLGFBQUMsVUFBa0I7SUFVM0IsMkJBQVc7SUFVWCw2QkFBYTtJQVViLGlDQUFpQjs7Ozs7O2dCQWpIbkI7RUFpQzJCLDBCQUEwQjtTQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBCYWRnZVxuICogQHByZW1pZXIgYmFkZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGVzc2VudGlhbCBwdXJwb3NlIG9mIGJhZGdlIG51bWJlcnMgaXMgdG8gZW5hYmxlIGFuIGFwcGxpY2F0aW9uIHRvIGluZm9ybSBpdHMgdXNlcnMgdGhhdCBpdCBoYXMgc29tZXRoaW5nIGZvciB0aGVtIOKAlCBmb3IgZXhhbXBsZSwgdW5yZWFkIG1lc3NhZ2VzIOKAlCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpc27igJl0IHJ1bm5pbmcgaW4gdGhlIGZvcmVncm91bmQuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWJhZGdlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFkZ2UgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UpLlxuICpcbiAqIEFuZHJvaWQgTm90ZTogQmFkZ2VzIGhhdmUgaGlzdG9yaWNhbGx5IG9ubHkgYmVlbiBhIGZlYXR1cmUgaW1wbGVtZW50ZWQgYnkgdGhpcmQgcGFydHkgbGF1bmNoZXJzIGFuZCBub3QgdmlzaWJsZSB1bmxlc3Mgb25lIG9mIHRob3NlIGxhdW5jaGVycyB3YXMgYmVpbmcgdXNlZCAoRS5HLiBTYW1zdW5nIG9yIE5vdmEgTGF1bmNoZXIpIGFuZCBpZiBlbmFibGVkIGJ5IHRoZSB1c2VyLiBBcyBvZiBBbmRyb2lkIDggKE9yZW8pLCBbbm90aWZpY2F0aW9uIGJhZGdlc10oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vdHJhaW5pbmcvbm90aWZ5LXVzZXIvYmFkZ2VzKSB3ZXJlIGludHJvZHVjZWQgb2ZmaWNpYWxseSB0byByZWZsZWN0IHVucmVhZCBub3RpZmljYXRpb25zLiBUaGlzIHBsdWdpbiBpcyB1bmxpa2VseSB0byB3b3JrIGFzIGV4cGVjdGVkIG9uIGRldmljZXMgcnVubmluZyBBbmRyb2lkIDggb3IgbmV3ZXIuIFBsZWFzZSBzZWUgdGhlIFtsb2NhbCBub3RpZmljYXRpb25zIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWxvY2FsLW5vdGlmaWNhdGlvbnMpIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGJhZGdlIHVzZSB3aXRoIG5vdGlmaWNhdGlvbnMuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhZGdlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWRnZTogQmFkZ2UpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYmFkZ2Uuc2V0KDEwKTtcbiAqIHRoaXMuYmFkZ2UuaW5jcmVhc2UoMSk7XG4gKiB0aGlzLmJhZGdlLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWRnZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5iYWRnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWRnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENsZWFyIHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYWRnZU51bWJlciAgVGhlIG5ldyBiYWRnZSBudW1iZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldChiYWRnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBiYWRnZSBvZiB0aGUgYXBwIGljb24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgYmFkZ2UgbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVhc2VCeSAgQ291bnQgdG8gYWRkIHRvIHRoZSBjdXJyZW50IGJhZGdlIG51bWJlclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbmNyZWFzZShpbmNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZSB0aGUgYmFkZ2UgbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVjcmVhc2VCeSAgQ291bnQgdG8gc3VidHJhY3QgZnJvbSB0aGUgY3VycmVudCBiYWRnZSBudW1iZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVjcmVhc2UoZGVjcmVhc2VCeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgc3VwcG9ydCB0byBzaG93IGJhZGdlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBhcHAgaGFzIHBlcm1pc3Npb24gdG8gc2hvdyBiYWRnZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgcGVybWlzc2lvbiB0byBzZXQgYmFkZ2Ugbm90aWZpY2F0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19