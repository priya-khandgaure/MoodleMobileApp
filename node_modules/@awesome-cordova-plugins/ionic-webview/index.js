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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var WebViewOriginal = /** @class */ (function (_super) {
    __extends(WebViewOriginal, _super);
    function WebViewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebViewOriginal.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: false,
        configurable: true
    });
    WebViewOriginal.pluginName = "WebView";
    WebViewOriginal.plugin = "cordova-plugin-ionic-webview";
    WebViewOriginal.pluginRef = "window.Ionic.WebView";
    WebViewOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebViewOriginal.platforms = ["Android", "iOS"];
    WebViewOriginal.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    return WebViewOriginal;
}(AwesomeCordovaNativePlugin));
var WebView = new WebViewOriginal();
export { WebView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9uaWMtd2Vidmlldy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNFQUF1RCxNQUFNLCtCQUErQixDQUFDOztJQStCdkUsMkJBQTBCOzs7OzBCQUtyRCxtQ0FBYzs7Ozs7Ozs7Ozs7O2tCQXJDaEI7RUFnQzZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBY2Nlc3MgV2ViIFZpZXcgdXRpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXdgID4gMi4wLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbSW9uaWMgV2ViIFZpZXddKGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcpIHJlcG9zaXRvcnkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYlZpZXcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW9uaWMtd2Vidmlldy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYnZpZXc6IFdlYlZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViVmlldycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuSW9uaWMuV2ViVmlldycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYlZpZXcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZXJ0IGEgYGZpbGU6Ly9gIFVSTCB0byBhIFVSTCB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgbG9jYWwgd2ViIHNlcnZlciBpbiB0aGUgV2ViIFZpZXcgcGx1Z2luLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGNvbnZlcnRGaWxlU3JjOiAodXJsOiBzdHJpbmcpID0+IHN0cmluZztcbn1cbiJdfQ==