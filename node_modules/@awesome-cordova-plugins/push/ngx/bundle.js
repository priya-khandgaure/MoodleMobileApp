'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

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

var Push = /** @class */ (function (_super) {
    tslib.__extends(Push, _super);
    function Push() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     *
     * @param options {PushOptions}
     * @returns {PushObject}
     */
    Push.prototype.init = function (options) {
        return new PushObject(options);
    };
    Push.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    Push.prototype.createChannel = function (channel) { return core.cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    Push.prototype.deleteChannel = function (id) { return core.cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    Push.prototype.listChannels = function () { return core.cordova(this, "listChannels", {}, arguments); };
    Push.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Push, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Push.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Push });
    Push.pluginName = "Push";
    Push.plugin = "phonegap-plugin-push";
    Push.pluginRef = "PushNotification";
    Push.repo = "https://github.com/phonegap/phonegap-plugin-push";
    Push.install = "ionic cordova plugin add phonegap-plugin-push";
    Push.platforms = ["Android", "Browser", "iOS", "Windows"];
    Push = tslib.__decorate([], Push);
    return Push;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Push, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasPermission: [], createChannel: [], deleteChannel: [], listChannels: [] } });
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (core.checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return core.cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return core.cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return core.cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return core.cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return core.cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return core.cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return core.cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return core.cordovaInstance(this, "unsubscribe", {}, arguments); };
    var _a;
    PushObject.pluginName = "Push";
    PushObject.plugin = "phonegap-plugin-push";
    PushObject.pluginRef = "PushNotification";
    PushObject = tslib.__decorate([
        tslib.__metadata("design:paramtypes", [typeof (_a = typeof PushOptions !== "undefined" && PushOptions) === "function" ? _a : Object])
    ], PushObject);
    return PushObject;
}());

exports.Push = Push;
exports.PushObject = PushObject;
