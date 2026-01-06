import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var WebIntent = /** @class */ (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebIntent, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    WebIntent.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebIntent });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
    WebIntent = __decorate([], WebIntent);
    return WebIntent;
}(AwesomeCordovaNativePlugin));
export { WebIntent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: WebIntent, decorators: [{
            type: Injectable
        }], propDecorators: { ACTION_SEND: [], ACTION_VIEW: [], EXTRA_TEXT: [], EXTRA_SUBJECT: [], EXTRA_STREAM: [], EXTRA_EMAIL: [], ACTION_CALL: [], ACTION_SENDTO: [], ACTION_GET_CONTENT: [], ACTION_PICK: [], ACTION_INSTALL_PACKAGE: [], ACTION_UNINSTALL_PACKAGE: [], startActivity: [], startActivityForResult: [], hasExtra: [], getExtra: [], getUri: [], onIntent: [], sendBroadcast: [], startService: [], registerBroadcastReceiver: [], unregisterBroadcastReceiver: [], onActivityResult: [], getIntent: [], sendResult: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLWludGVudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7SUF1RUgsNkJBQTBCOzs7O0lBd0d2RCxpQ0FBYSxhQUFDLE9BQXNCO0lBV3BDLDBDQUFzQixhQUFDLE9BQXNCO0lBVzdDLDRCQUFRLGFBQUMsS0FBYTtJQVd0Qiw0QkFBUSxhQUFDLEtBQWE7SUFVdEIsMEJBQU07SUFZTiw0QkFBUTtJQVdSLGlDQUFhLGFBQUMsT0FBc0I7SUFXcEMsZ0NBQVksYUFBQyxPQUFzQjtJQWFuQyw2Q0FBeUIsYUFBQyxPQUF5QztJQVFuRSwrQ0FBMkI7SUFNM0Isb0NBQWdCO0lBTWhCLDZCQUFTO0lBYVQsOEJBQVUsYUFBQyxFQUFjO1lBQVosY0FBVTs7OzBCQTVOdkIsa0NBQVc7Ozs7OzswQkFRWCxrQ0FBVzs7Ozs7OzBCQVFYLGlDQUFVOzs7Ozs7MEJBUVYsb0NBQWE7Ozs7OzswQkFRYixtQ0FBWTs7Ozs7OzBCQVFaLGtDQUFXOzs7Ozs7MEJBUVgsa0NBQVc7Ozs7OzswQkFRWCxvQ0FBYTs7Ozs7OzBCQVFiLHlDQUFrQjs7Ozs7OzBCQVFsQixrQ0FBVzs7Ozs7OzBCQVFYLDZDQUFzQjs7Ozs7OzBCQVF0QiwrQ0FBd0I7Ozs7OzsyR0EvRmIsU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBekV0QjtFQXlFK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFRVCxXQUFXLE1BUVgsV0FBVyxNQVFYLFVBQVUsTUFRVixhQUFhLE1BUWIsWUFBWSxNQVFaLFdBQVcsTUFRWCxXQUFXLE1BUVgsYUFBYSxNQVFiLGtCQUFrQixNQVFsQixXQUFXLE1BUVgsc0JBQXNCLE1BUXRCLHdCQUF3QixNQVN4QixhQUFhLE1BV2Isc0JBQXNCLE1BV3RCLFFBQVEsTUFXUixRQUFRLE1BVVIsTUFBTSxNQVlOLFFBQVEsTUFXUixhQUFhLE1BV2IsWUFBWSxNQWFaLHlCQUF5QixNQVF6QiwyQkFBMkIsTUFNM0IsZ0JBQWdCLE1BTWhCLFNBQVMsTUFhVCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVudENsaXBJdGVtIHtcbiAgdXJpOiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGV4dGVuc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgY2xpcEl0ZW1zOiBJbnRlbnRDbGlwSXRlbVtdO1xuICBjb21wb25lbnQ6IHN0cmluZztcbiAgZXh0cmFzOiBvYmplY3Q7XG4gIGZsYWdzOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyB7XG4gIGZpbHRlckFjdGlvbnM/OiBzdHJpbmdbXTtcbiAgZmlsdGVyQ2F0ZWdvcmllcz86IHN0cmluZ1tdO1xuICBmaWx0ZXJEYXRhU2NoZW1lcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVudE9wdGlvbnMge1xuICByZXF1ZXN0Q29kZT86IG51bWJlcjtcbiAgdHlwZT86IHN0cmluZztcbiAgcGFja2FnZT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBleHRyYXM/OiBvYmplY3Q7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgY29tcG9uZW50Pzoge1xuICAgIHBhY2thZ2U6IHN0cmluZztcbiAgICBjbGFzczogc3RyaW5nO1xuICB9O1xuICBmbGFncz86IG51bWJlcltdO1xufVxuXG4vKipcbiAqIEBuYW1lIFdlYiBJbnRlbnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBQbHVnaW4gcHJvdmlkZXMgYSBnZW5lcmFsIHB1cnBvc2Ugc2hpbSBsYXllciBmb3IgdGhlIEFuZHJvaWQgaW50ZW50IG1lY2hhbmlzbSwgZXhwb3NpbmcgdmFyaW91cyB3YXlzIHRvIGhhbmRsZSBzZW5kaW5nIGFuZCByZWNlaXZpbmcgaW50ZW50cy5cbiAqIEB1c2FnZVxuICogRm9yIHVzYWdlIGluZm9ybWF0aW9uIHBsZWFzZSByZWZlciB0byB0aGUgcGx1Z2luJ3MgR2l0aHViIHJlcG8uXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViSW50ZW50IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlYi1pbnRlbnQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYkludGVudDogV2ViSW50ZW50KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdCBvcHRpb25zID0ge1xuICogICBhY3Rpb246IHRoaXMud2ViSW50ZW50LkFDVElPTl9WSUVXLFxuICogICB1cmw6ICdwYXRoL3RvL2ZpbGUnLFxuICogICB0eXBlOiAnYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlJ1xuICogfVxuICpcbiAqIHRoaXMud2ViSW50ZW50LnN0YXJ0QWN0aXZpdHkob3B0aW9ucykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEludGVudE9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWJJbnRlbnQnLFxuICBwbHVnaW46ICdjb20tZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5pbnRlbnRTaGltJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXJyeW5jYW1wYmVsbC9kYXJyeW5jYW1wYmVsbC1jb3Jkb3ZhLXBsdWdpbi1pbnRlbnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWJJbnRlbnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9TRU5EOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1ZJRVc6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1RFWFQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1NVQkpFQ1Q6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX1NUUkVBTTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVhUUkFfRU1BSUw6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fQ0FMTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9TRU5EVE86IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fR0VUX0NPTlRFTlQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fUElDSzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fVU5JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoZXMgYW4gQW5kcm9pZCBpbnRlbnRcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0QWN0aXZpdHkob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBhIG5ldyBhY3Rpdml0eSBhbmQgcmV0dXJuIHRoZSByZXN1bHQgdG8gdGhlIGFwcGxpY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFjdGl2aXR5Rm9yUmVzdWx0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aCBzcGVjaWZpZWQgZXh0cmFcbiAgICpcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhhc0V4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBleHRyYSB0aGF0IHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGhcbiAgICpcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBVcmkgdGhlIGFwcCB3YXMgaW52b2tlZCB3aXRoXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFVyaSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSBpbnRlbnQgdXNlZCB3aGVuZXZlciB0aGUgYXBwbGljYXRpb24gYWN0aXZpdHkgaXMgbGF1bmNoZWRcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW50ZW50Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBvbkludGVudCgpOiBPYnNlcnZhYmxlPEludGVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGN1c3RvbSBpbnRlbnQgcGFzc2luZyBvcHRpb25hbCBleHRyYXNcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRCcm9hZGNhc3Qob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgdGhhdCBhIGdpdmVuIGFwcGxpY2F0aW9uIHNlcnZpY2UgYmUgc3RhcnRlZFxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTZXJ2aWNlKG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZmlsdGVyc1xuICAgKlxuICAgKiBAcGFyYW0gZmlsdGVycyB7UmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgcmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlcihmaWx0ZXJzOiBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdW5yZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKCk6IHZvaWQge31cblxuICAvKipcbiAgICpcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBvbkFjdGl2aXR5UmVzdWx0KCk6IHZvaWQge31cblxuICAvKipcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW50ZW50KCk6IFByb21pc2U8SW50ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSByZXN1bHQgYmFjayB0byB0aGUgSW50ZW50IHRoYXQgc3RhcnRlZCB0aGlzIEFjdGl2aXR5LlxuICAgKiBUaGUgZGF0YSBjYW4gYmUgcGFzc2VkIHVzaW5nICdleHRyYXMnLlxuICAgKlxuICAgKiBAcGFyYW0gcm9vdDBcbiAgICogQHBhcmFtIHJvb3QwLmV4dHJhc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVzdWx0KHsgZXh0cmFzOiB7fSB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==