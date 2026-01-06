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
var FileOpenerOriginal = /** @class */ (function (_super) {
    __extends(FileOpenerOriginal, _super);
    function FileOpenerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpenerOriginal.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.pluginName = "FileOpener";
    FileOpenerOriginal.plugin = "cordova-plugin-file-opener2";
    FileOpenerOriginal.pluginRef = "cordova.plugins.fileOpener2";
    FileOpenerOriginal.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpenerOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return FileOpenerOriginal;
}(AwesomeCordovaNativePlugin));
var FileOpener = new FileOpenerOriginal();
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1vcGVuZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnQzVELDhCQUEwQjs7OztJQWF4RCx5QkFBSSxhQUFDLFFBQWdCLEVBQUUsWUFBb0I7SUFlM0MsOEJBQVMsYUFBQyxTQUFpQjtJQWUzQixtQ0FBYyxhQUFDLFNBQWlCO0lBZ0JoQyx1Q0FBa0IsYUFBQyxRQUFnQixFQUFFLFlBQW9COzs7Ozs7cUJBNUYzRDtFQWlDZ0MsMEJBQTBCO1NBQTdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZpbGUgT3BlbmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIGZpbGUgb24geW91ciBkZXZpY2UgZmlsZSBzeXN0ZW0gd2l0aCBpdHMgZGVmYXVsdCBhcHBsaWNhdGlvbi5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZU9wZW5lciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLW9wZW5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsZU9wZW5lcjogRmlsZU9wZW5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5maWxlT3BlbmVyLm9wZW4oJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBvcGVuaW5nIGZpbGUnLCBlKSk7XG4gKlxuICogdGhpcy5maWxlT3BlbmVyLnNob3dPcGVuV2l0aERpYWxvZygncGF0aC90by9maWxlLnBkZicsICdhcHBsaWNhdGlvbi9wZGYnKVxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRmlsZSBpcyBvcGVuZWQnKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlT3BlbmVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpbGVPcGVuZXIyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wd2xpbi9jb3Jkb3ZhLXBsdWdpbi1maWxlLW9wZW5lcjInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsZU9wZW5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW4gYW4gZmlsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgb3BlbihmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuaW5zdGFsbHMgYSBwYWNrYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxuICB9KVxuICB1bmluc3RhbGwocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhcHAgaXMgYWxyZWFkeSBpbnN0YWxsZWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VJZCBQYWNrYWdlIElEXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXG4gIH0pXG4gIGFwcElzSW5zdGFsbGVkKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgd2l0aCBzeXN0ZW0gbW9kYWwgdG8gb3BlbiBmaWxlIHdpdGggYW4gYWxyZWFkeSBpbnN0YWxsZWQgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcbiAgfSlcbiAgc2hvd09wZW5XaXRoRGlhbG9nKGZpbGVQYXRoOiBzdHJpbmcsIGZpbGVNSU1FVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==