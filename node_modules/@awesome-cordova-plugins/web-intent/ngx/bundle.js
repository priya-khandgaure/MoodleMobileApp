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

var WebIntent = /** @class */ (function (_super) {
    tslib.__extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return core.cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return core.cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return core.cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return core.cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return core.cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return core.cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return core.cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return core.cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return core.cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return core.cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return core.cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return core.cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        _a.extras;
        return core.cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return core.cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { core.cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return core.cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { core.cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return core.cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { core.cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return core.cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { core.cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return core.cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { core.cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebIntent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WebIntent.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebIntent });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
    WebIntent = tslib.__decorate([], WebIntent);
    return WebIntent;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: WebIntent, decorators: [{
            type: i0.Injectable
        }], propDecorators: { ACTION_SEND: [], ACTION_VIEW: [], EXTRA_TEXT: [], EXTRA_SUBJECT: [], EXTRA_STREAM: [], EXTRA_EMAIL: [], ACTION_CALL: [], ACTION_SENDTO: [], ACTION_GET_CONTENT: [], ACTION_PICK: [], ACTION_INSTALL_PACKAGE: [], ACTION_UNINSTALL_PACKAGE: [], startActivity: [], startActivityForResult: [], hasExtra: [], getExtra: [], getUri: [], onIntent: [], sendBroadcast: [], startService: [], registerBroadcastReceiver: [], unregisterBroadcastReceiver: [], onActivityResult: [], getIntent: [], sendResult: [] } });

exports.WebIntent = WebIntent;
