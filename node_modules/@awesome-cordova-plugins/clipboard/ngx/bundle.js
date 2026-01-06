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

var Clipboard = /** @class */ (function (_super) {
    tslib.__extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return core.cordova(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return core.cordova(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return core.cordova(this, "clear", {}, arguments); };
    Clipboard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Clipboard, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Clipboard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Clipboard });
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
    Clipboard = tslib.__decorate([], Clipboard);
    return Clipboard;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Clipboard, decorators: [{
            type: i0.Injectable
        }], propDecorators: { copy: [], paste: [], clear: [] } });

exports.Clipboard = Clipboard;
