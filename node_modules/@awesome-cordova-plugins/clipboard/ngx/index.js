import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var Clipboard = /** @class */ (function (_super) {
    __extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    Clipboard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Clipboard, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    Clipboard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Clipboard });
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
    Clipboard = __decorate([], Clipboard);
    return Clipboard;
}(AwesomeCordovaNativePlugin));
export { Clipboard };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: Clipboard, decorators: [{
            type: Injectable
        }], propDecorators: { copy: [], paste: [], clear: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xpcGJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFxQzdELDZCQUEwQjs7OztJQVF2RCx3QkFBSSxhQUFDLElBQVk7SUFVakIseUJBQUs7SUFVTCx5QkFBSzsyR0E1Qk0sU0FBUzsrR0FBVCxTQUFTOzs7Ozs7SUFBVCxTQUFTLGtCQUFULFNBQVM7b0JBdEN0QjtFQXNDK0IsMEJBQTBCO1NBQTVDLFNBQVM7NEZBQVQsU0FBUztrQkFEckIsVUFBVTs4QkFTVCxJQUFJLE1BVUosS0FBSyxNQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuLyoqXG4gKiBAbmFtZSBDbGlwYm9hcmRcbiAqIEBwcmVtaWVyIGNsaXBib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBDbGlwYm9hcmQgbWFuYWdlbWVudCBwbHVnaW4gZm9yIENvcmRvdmEgdGhhdCBzdXBwb3J0cyBpT1MsIEFuZHJvaWQsIGFuZCBXaW5kb3dzIFBob25lIDguXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jbGlwYm9hcmQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZDogQ2xpcGJvYXJkKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jbGlwYm9hcmQuY29weSgnSGVsbG8gd29ybGQnKTtcbiAqXG4gKiB0aGlzLmNsaXBib2FyZC5wYXN0ZSgpLnRoZW4oXG4gKiAgICAocmVzb2x2ZTogc3RyaW5nKSA9PiB7XG4gKiAgICAgICBhbGVydChyZXNvbHZlKTtcbiAqICAgICB9LFxuICogICAgIChyZWplY3Q6IHN0cmluZykgPT4ge1xuICogICAgICAgYWxlcnQoJ0Vycm9yOiAnICsgcmVqZWN0KTtcbiAqICAgICB9XG4gKiAgICk7XG4gKlxuICogdGhpcy5jbGlwYm9hcmQuY2xlYXIoKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NsaXBib2FyZCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtY2xpcGJvYXJkJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmNsaXBib2FyZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9jb3Jkb3ZhLWNsaXBib2FyZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29waWVzIHRoZSBnaXZlbiB0ZXh0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdGhhdCBnZXRzIGNvcGllZCBvbiB0aGUgc3lzdGVtIGNsaXBib2FyZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjb3BpZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29weSh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXN0ZXMgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBwYXN0ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGFzdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHRleHQgc3RvcmVkIGluIGNsaXBib2FyZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBjbGVhbmVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=