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

exports.KeyboardStyle = void 0;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(exports.KeyboardStyle || (exports.KeyboardStyle = {}));
exports.KeyboardResizeMode = void 0;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(exports.KeyboardResizeMode || (exports.KeyboardResizeMode = {}));
var Keyboard = /** @class */ (function (_super) {
    tslib.__extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return core.cordova(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return core.cordova(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return core.cordova(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.setKeyboardStyle = function (style) { return core.cordova(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.disableScroll = function (disable) { return core.cordova(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return core.cordova(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return core.cordova(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidShow = function () { return core.cordova(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return core.cordova(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return core.cordova(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidHide = function () { return core.cordova(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return core.cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { core.cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    Keyboard.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keyboard, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    Keyboard.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keyboard });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
    Keyboard = tslib.__decorate([], Keyboard);
    return Keyboard;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: Keyboard, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isVisible: [], hideFormAccessoryBar: [], hide: [], show: [], setResizeMode: [], setKeyboardStyle: [], disableScroll: [], onKeyboardShow: [], onKeyboardWillShow: [], onKeyboardDidShow: [], onKeyboardHide: [], onKeyboardWillHide: [], onKeyboardDidHide: [] } });

exports.Keyboard = Keyboard;
