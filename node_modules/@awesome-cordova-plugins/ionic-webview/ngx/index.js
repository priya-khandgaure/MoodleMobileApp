import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: false,
        configurable: true
    });
    WebView.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebView, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebView.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebView });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    WebView = __decorate([], WebView);
    return WebView;
}(AwesomeCordovaNativePlugin));
export { WebView };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebView, decorators: [{
            type: Injectable
        }], propDecorators: { convertFileSrc: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9uaWMtd2Vidmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSwrQkFBK0IsQ0FBQzs7O0lBK0J2RSwyQkFBMEI7Ozs7MEJBS3JELG1DQUFjOzs7Ozs7eUdBTEgsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7O0lBQVAsT0FBTyxrQkFBUCxPQUFPO2tCQWhDcEI7RUFnQzZCLDBCQUEwQjtTQUExQyxPQUFPOzRGQUFQLE9BQU87a0JBRG5CLFVBQVU7OEJBTVQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBJb25pYyBXZWJ2aWV3XG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIFdlYiBWaWV3IHV0aWxpdGllcy5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3YCA+IDIuMC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0lvbmljIFdlYiBWaWV3XShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3KSByZXBvc2l0b3J5LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2lvbmljLXdlYnZpZXcvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJ2aWV3OiBXZWJWaWV3KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBpbWcgPSB0aGlzLndlYnZpZXcuY29udmVydEZpbGVTcmMoJ2ZpbGU6Ly8vVXNlcnMvZGFuL2NhbWVyYS1pbWFnZS0xMjM0NS5wbmcnKVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYlZpZXcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LklvbmljLldlYlZpZXcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJWaWV3IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVydCBhIGBmaWxlOi8vYCBVUkwgdG8gYSBVUkwgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGxvY2FsIHdlYiBzZXJ2ZXIgaW4gdGhlIFdlYiBWaWV3IHBsdWdpbi5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBjb252ZXJ0RmlsZVNyYzogKHVybDogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG4iXX0=