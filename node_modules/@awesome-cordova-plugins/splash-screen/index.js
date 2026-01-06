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
var SplashScreenOriginal = /** @class */ (function (_super) {
    __extends(SplashScreenOriginal, _super);
    function SplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreenOriginal.pluginName = "SplashScreen";
    SplashScreenOriginal.plugin = "cordova-plugin-splashscreen";
    SplashScreenOriginal.pluginRef = "navigator.splashscreen";
    SplashScreenOriginal.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreenOriginal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    return SplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var SplashScreen = new SplashScreenOriginal();
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCMUQsZ0NBQTBCOzs7O0lBTzFELDJCQUFJO0lBUUosMkJBQUk7Ozs7Ozt1QkE1Q047RUE2QmtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBTcGxhc2ggU2NyZWVuXG4gKiBAcHJlbWllciBzcGxhc2hzY3JlZW5cbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRpc3BsYXlzIGFuZCBoaWRlcyBhIHNwbGFzaCBzY3JlZW4gZHVyaW5nIGFwcGxpY2F0aW9uIGxhdW5jaC4gVGhlIG1ldGhvZHMgYmVsb3cgYWxsb3dzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc3BsYXNoc2NyZWVuIGFmdGVyIHRoZSBhcHAgaGFzIGxvYWRlZC5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NwbGFzaC1zY3JlZW4vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5zaG93KCk7XG4gKlxuICogdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3BsYXNoU2NyZWVuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNwbGFzaHNjcmVlbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwbGFzaFNjcmVlbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIHRoZSBzcGxhc2hzY3JlZW5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgdGhlIHNwbGFzaHNjcmVlblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGhpZGUoKTogdm9pZCB7fVxufVxuIl19