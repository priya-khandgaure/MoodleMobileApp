'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var FileOpener = /** @class */ (function (_super) {
    tslib.__extends(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return core.cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.uninstall = function (packageId) { return core.cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.appIsInstalled = function (packageId) { return core.cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return core.cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileOpener, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FileOpener.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileOpener });
    FileOpener.pluginName = "FileOpener";
    FileOpener.plugin = "cordova-plugin-file-opener2";
    FileOpener.pluginRef = "cordova.plugins.fileOpener2";
    FileOpener.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpener.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    FileOpener = tslib.__decorate([], FileOpener);
    return FileOpener;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FileOpener, decorators: [{
            type: i0.Injectable
        }], propDecorators: { open: [], uninstall: [], appIsInstalled: [], showOpenWithDialog: [] } });

exports.FileOpener = FileOpener;
