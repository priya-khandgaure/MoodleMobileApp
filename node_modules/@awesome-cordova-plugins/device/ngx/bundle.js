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

var Device = /** @class */ (function (_super) {
    tslib.__extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return core.cordovaPropertyGet(this, "cordova"); },
        set: function (value) { core.cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return core.cordovaPropertyGet(this, "model"); },
        set: function (value) { core.cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return core.cordovaPropertyGet(this, "platform"); },
        set: function (value) { core.cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return core.cordovaPropertyGet(this, "uuid"); },
        set: function (value) { core.cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return core.cordovaPropertyGet(this, "version"); },
        set: function (value) { core.cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return core.cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { core.cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return core.cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { core.cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return core.cordovaPropertyGet(this, "serial"); },
        set: function (value) { core.cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "sdkVersion", {
        get: function () { return core.cordovaPropertyGet(this, "sdkVersion"); },
        set: function (value) { core.cordovaPropertySet(this, "sdkVersion", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isiOSAppOnMac", {
        get: function () { return core.cordovaPropertyGet(this, "isiOSAppOnMac"); },
        set: function (value) { core.cordovaPropertySet(this, "isiOSAppOnMac", value); },
        enumerable: false,
        configurable: true
    });
    Device.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Device, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Device.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Device });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device = tslib.__decorate([], Device);
    return Device;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Device, decorators: [{
            type: i0.Injectable
        }], propDecorators: { cordova: [], model: [], platform: [], uuid: [], version: [], manufacturer: [], isVirtual: [], serial: [], sdkVersion: [], isiOSAppOnMac: [] } });

exports.Device = Device;
