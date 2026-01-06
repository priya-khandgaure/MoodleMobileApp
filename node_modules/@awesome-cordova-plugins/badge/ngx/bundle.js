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

var Badge = /** @class */ (function (_super) {
    tslib.__extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.clear = function () { return core.cordova(this, "clear", {}, arguments); };
    Badge.prototype.set = function (badgeNumber) { return core.cordova(this, "set", {}, arguments); };
    Badge.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    Badge.prototype.increase = function (increaseBy) { return core.cordova(this, "increase", {}, arguments); };
    Badge.prototype.decrease = function (decreaseBy) { return core.cordova(this, "decrease", {}, arguments); };
    Badge.prototype.isSupported = function () { return core.cordova(this, "isSupported", {}, arguments); };
    Badge.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    Badge.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    Badge.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Badge, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Badge.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Badge });
    Badge.pluginName = "Badge";
    Badge.plugin = "cordova-plugin-badge";
    Badge.pluginRef = "cordova.plugins.notification.badge";
    Badge.repo = "https://github.com/katzer/cordova-plugin-badge";
    Badge.platforms = ["Android", "Browser", "iOS", "Windows"];
    Badge = tslib.__decorate([], Badge);
    return Badge;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Badge, decorators: [{
            type: i0.Injectable
        }], propDecorators: { clear: [], set: [], get: [], increase: [], decrease: [], isSupported: [], hasPermission: [], requestPermission: [] } });

exports.Badge = Badge;
