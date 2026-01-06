import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "sdkVersion", {
        get: function () { return cordovaPropertyGet(this, "sdkVersion"); },
        set: function (value) { cordovaPropertySet(this, "sdkVersion", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isiOSAppOnMac", {
        get: function () { return cordovaPropertyGet(this, "isiOSAppOnMac"); },
        set: function (value) { cordovaPropertySet(this, "isiOSAppOnMac", value); },
        enumerable: false,
        configurable: true
    });
    Device.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Device, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Device.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Device });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device = __decorate([], Device);
    return Device;
}(AwesomeCordovaNativePlugin));
export { Device };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Device, decorators: [{
            type: Injectable
        }], propDecorators: { cordova: [], model: [], platform: [], uuid: [], version: [], manufacturer: [], isVirtual: [], serial: [], sdkVersion: [], isiOSAppOnMac: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLCtCQUErQixDQUFDOzs7SUE0QnhFLDBCQUEwQjs7OzswQkFHcEQsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7OzBCQUlOLDhCQUFVOzs7Ozs7MEJBSVYsaUNBQWE7Ozs7Ozt3R0ExQ0YsTUFBTTs0R0FBTixNQUFNOzs7Ozs7SUFBTixNQUFNLGtCQUFOLE1BQU07aUJBN0JuQjtFQTZCNEIsMEJBQTBCO1NBQXpDLE1BQU07NEZBQU4sTUFBTTtrQkFEbEIsVUFBVTs4QkFJVCxPQUFPLE1BT1AsS0FBSyxNQUlMLFFBQVEsTUFJUixJQUFJLE1BSUosT0FBTyxNQUlQLFlBQVksTUFJWixTQUFTLE1BSVQsTUFBTSxNQUlOLFVBQVUsTUFJVixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xuXG4vKipcbiAqIEBuYW1lIERldmljZVxuICogQHByZW1pZXIgZGV2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdW5kZXJseWluZyBkZXZpY2UgYW5kIHBsYXRmb3JtLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGV2aWNlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2U6IERldmljZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc29sZS5sb2coJ0RldmljZSBVVUlEIGlzOiAnICsgdGhpcy5kZXZpY2UudXVpZCk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXZpY2UnLFxuICBwbHVnaW5SZWY6ICdkZXZpY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqIEdldCB0aGUgdmVyc2lvbiBvZiBDb3Jkb3ZhIHJ1bm5pbmcgb24gdGhlIGRldmljZS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGNvcmRvdmE6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGRldmljZS5tb2RlbCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UncyBtb2RlbCBvciBwcm9kdWN0LiBUaGUgdmFsdWUgaXMgc2V0XG4gICAqIGJ5IHRoZSBkZXZpY2UgbWFudWZhY3R1cmVyIGFuZCBtYXkgYmUgZGlmZmVyZW50IGFjcm9zcyB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBwcm9kdWN0LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1vZGVsOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3Mgb3BlcmF0aW5nIHN5c3RlbSBuYW1lLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgcGxhdGZvcm06IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB1dWlkOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgb3BlcmF0aW5nIHN5c3RlbSB2ZXJzaW9uLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgdmVyc2lvbjogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG1hbnVmYWN0dXJlci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkZXZpY2UgaXMgcnVubmluZyBvbiBhIHNpbXVsYXRvci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlydHVhbDogYm9vbGVhbjtcblxuICAvKiogR2V0IHRoZSBkZXZpY2UgaGFyZHdhcmUgc2VyaWFsIG51bWJlci4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHNlcmlhbDogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIEFuZHJvaWQgZGV2aWNlJ3MgU0RLIHZlcnNpb24uIChBbmRyb2lkLW9ubHkpICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBzZGtWZXJzaW9uPzogc3RyaW5nO1xuXG4gIC8qKiBEZXRlY3QgaWYgYXBwIGlzIHJ1bm5pbmcgb24gYSBtYWNPUyBkZXNrdG9wIHdpdGggQXBwbGUgU2lsaWNvbi4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzaU9TQXBwT25NYWM6IHN0cmluZztcbn1cbiJdfQ==