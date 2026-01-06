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
var ClipboardOriginal = /** @class */ (function (_super) {
    __extends(ClipboardOriginal, _super);
    function ClipboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardOriginal.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    ClipboardOriginal.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    ClipboardOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    ClipboardOriginal.pluginName = "Clipboard";
    ClipboardOriginal.plugin = "cordova-clipboard";
    ClipboardOriginal.pluginRef = "cordova.plugins.clipboard";
    ClipboardOriginal.repo = "https://github.com/ihadeed/cordova-clipboard";
    ClipboardOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return ClipboardOriginal;
}(AwesomeCordovaNativePlugin));
var Clipboard = new ClipboardOriginal();
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xpcGJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBcUM3RCw2QkFBMEI7Ozs7SUFRdkQsd0JBQUksYUFBQyxJQUFZO0lBVWpCLHlCQUFLO0lBVUwseUJBQUs7Ozs7OztvQkFsRVA7RUFzQytCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbi8qKlxuICogQG5hbWUgQ2xpcGJvYXJkXG4gKiBAcHJlbWllciBjbGlwYm9hcmRcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xpcGJvYXJkIG1hbmFnZW1lbnQgcGx1Z2luIGZvciBDb3Jkb3ZhIHRoYXQgc3VwcG9ydHMgaU9TLCBBbmRyb2lkLCBhbmQgV2luZG93cyBQaG9uZSA4LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2xpcGJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjbGlwYm9hcmQ6IENsaXBib2FyZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQucGFzdGUoKS50aGVuKFxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQocmVzb2x2ZSk7XG4gKiAgICAgfSxcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcbiAqICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIHJlamVjdCk7XG4gKiAgICAgfVxuICogICApO1xuICpcbiAqIHRoaXMuY2xpcGJvYXJkLmNsZWFyKCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENsaXBib2FyZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvcGllcyB0aGUgZ2l2ZW4gdGV4dFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUZXh0IHRoYXQgZ2V0cyBjb3BpZWQgb24gdGhlIHN5c3RlbSBjbGlwYm9hcmRcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY29waWVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGFzdGVzIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gcGFzdGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhc3RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY2xlYW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19