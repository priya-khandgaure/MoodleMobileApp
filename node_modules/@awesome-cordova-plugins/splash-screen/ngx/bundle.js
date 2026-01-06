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

var SplashScreen = /** @class */ (function (_super) {
    tslib.__extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return core.cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SplashScreen, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SplashScreen.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SplashScreen });
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    SplashScreen = tslib.__decorate([], SplashScreen);
    return SplashScreen;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SplashScreen, decorators: [{
            type: i0.Injectable
        }], propDecorators: { show: [], hide: [] } });

exports.SplashScreen = SplashScreen;
