'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
var rxjs = require('rxjs');
var operators = require('rxjs/operators');

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

exports.Connection = void 0;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["CELL"] = "cellular";
    Connection["NONE"] = "none";
})(exports.Connection || (exports.Connection = {}));
var Network = /** @class */ (function (_super) {
    tslib.__extends(Network, _super);
    function Network() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return rxjs.merge(_this.onConnect().pipe(operators.mapTo('connected')), _this.onDisconnect().pipe(operators.mapTo('disconnected')));
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return core.cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return core.cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return core.cordovaPropertyGet(this, "type"); },
        set: function (value) { core.cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return core.cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { core.cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    Network.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Network, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Network.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Network });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network = tslib.__decorate([], Network);
    return Network;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Network, decorators: [{
            type: i0.Injectable
        }], propDecorators: { type: [], downlinkMax: [], onChange: [], onDisconnect: [], onConnect: [] } });

exports.Network = Network;
