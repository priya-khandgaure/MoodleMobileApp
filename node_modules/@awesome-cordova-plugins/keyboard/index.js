var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
export var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var KeyboardOriginal = /** @class */ (function (_super) {
    __extends(KeyboardOriginal, _super);
    function KeyboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyboardOriginal.prototype.hideFormAccessoryBar = function (hide) { return cordova(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    KeyboardOriginal.prototype.setResizeMode = function (mode) { return cordova(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.setKeyboardStyle = function (style) { return cordova(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.disableScroll = function (disable) { return cordova(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardShow = function () { return cordova(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillShow = function () { return cordova(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidShow = function () { return cordova(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardHide = function () { return cordova(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillHide = function () { return cordova(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidHide = function () { return cordova(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(KeyboardOriginal.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    KeyboardOriginal.pluginName = "Keyboard";
    KeyboardOriginal.plugin = "cordova-plugin-ionic-keyboard";
    KeyboardOriginal.pluginRef = "window.Keyboard";
    KeyboardOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    KeyboardOriginal.platforms = ["Android", "iOS"];
    return KeyboardOriginal;
}(AwesomeCordovaNativePlugin));
var Keyboard = new KeyboardOriginal();
export { Keyboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMva2V5Ym9hcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsZ0NBQWUsQ0FBQTtJQUNmLDhCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFLWDtBQUxELFdBQVksa0JBQWtCO0lBQzVCLHVDQUFpQixDQUFBO0lBQ2pCLHFDQUFlLENBQUE7SUFDZixtQ0FBYSxDQUFBO0lBQ2IsbUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBSzdCOztJQWdDNkIsNEJBQTBCOzs7O0lBa0J0RCx1Q0FBb0IsYUFBQyxJQUFhO0lBU2xDLHVCQUFJO0lBU0osdUJBQUk7SUFXSixnQ0FBYSxhQUFDLElBQXdCO0lBWXRDLG1DQUFnQixhQUFDLEtBQW9CO0lBWXJDLGdDQUFhLGFBQUMsT0FBZ0I7SUFZOUIsaUNBQWM7SUFjZCxxQ0FBa0I7SUFjbEIsb0NBQWlCO0lBY2pCLGlDQUFjO0lBY2QscUNBQWtCO0lBY2xCLG9DQUFpQjswQkFsSmpCLCtCQUFTOzs7Ozs7Ozs7OzttQkFyRFg7RUE4QzhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIENvcmRvdmFQcm9wZXJ0eSwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBLZXlib2FyZFN0eWxlIHtcbiAgTGlnaHQgPSAnbGlnaHQnLFxuICBEYXJrID0gJ2RhcmsnLFxufVxuXG5leHBvcnQgZW51bSBLZXlib2FyZFJlc2l6ZU1vZGUge1xuICBOYXRpdmUgPSAnbmF0aXZlJyxcbiAgSW9uaWMgPSAnaW9uaWMnLFxuICBCb2R5ID0gJ2JvZHknLFxuICBOb25lID0gJ25vbmUnLFxufVxuXG4vKipcbiAqIEBuYW1lIEtleWJvYXJkXG4gKiBAcHJlbWllciBrZXlib2FyZFxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEtleWJvYXJkIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLWtleWJvYXJkYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0tleWJvYXJkIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZCkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBrZXlib2FyZCBzdGF0dXMgdmlzaWJsZSBvciBub3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGlkZSB0aGUga2V5Ym9hcmQgYWNjZXNzb3J5IGJhciB3aXRoIHRoZSBuZXh0LCBwcmV2aW91cyBhbmQgZG9uZSBidXR0b25zLlxuICAgKlxuICAgKiBAcGFyYW0gaGlkZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaGlkZUZvcm1BY2Nlc3NvcnlCYXIoaGlkZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZSB0aGUga2V5Ym9hcmQgaWYgc2hvd24uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1hdGljYWxseSBzZXQgdGhlIHJlc2l6ZSBtb2RlXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNldFJlc2l6ZU1vZGUobW9kZTogS2V5Ym9hcmRSZXNpemVNb2RlKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgc2V0IEtleWJvYXJkIHN0eWxlXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdHlsZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzZXRLZXlib2FyZFN0eWxlKHN0eWxlOiBLZXlib2FyZFN0eWxlKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgZW5hYmxlIG9yIGRpc2FibGUgdGhlIFdlYlZpZXcgc2Nyb2xsXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBkaXNhYmxlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGRpc2FibGVTY3JvbGwoZGlzYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIHNob3duLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRzaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsU2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmRXaWxsU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgZGlkIHNob3cuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkRGlkU2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmREaWRTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBpcyBoaWRkZW4uIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ25hdGl2ZS5rZXlib2FyZGhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxIaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZFdpbGxIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBkaWQgaGlkZS4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmREaWRIaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZERpZEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==