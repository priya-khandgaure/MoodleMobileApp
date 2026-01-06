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

exports.ELocalNotificationTriggerUnit = void 0;
(function (ELocalNotificationTriggerUnit) {
    ELocalNotificationTriggerUnit["SECOND"] = "second";
    ELocalNotificationTriggerUnit["MINUTE"] = "minute";
    ELocalNotificationTriggerUnit["HOUR"] = "hour";
    ELocalNotificationTriggerUnit["DAY"] = "day";
    ELocalNotificationTriggerUnit["WEEK"] = "week";
    ELocalNotificationTriggerUnit["MONTH"] = "month";
    ELocalNotificationTriggerUnit["QUARTER"] = "quarter";
    ELocalNotificationTriggerUnit["YEAR"] = "year";
    ELocalNotificationTriggerUnit["WEEKDAY"] = "weekday";
    ELocalNotificationTriggerUnit["WEEKDAY_ORDINAL"] = "weekdayOrdinal";
    ELocalNotificationTriggerUnit["WEEK_OF_MONTH"] = "weekOfMonth";
})(exports.ELocalNotificationTriggerUnit || (exports.ELocalNotificationTriggerUnit = {}));
exports.ILocalNotificationActionType = void 0;
(function (ILocalNotificationActionType) {
    ILocalNotificationActionType["INPUT"] = "input";
    ILocalNotificationActionType["BUTTON"] = "button";
})(exports.ILocalNotificationActionType || (exports.ILocalNotificationActionType = {}));
var LocalNotifications = /** @class */ (function (_super) {
    tslib.__extends(LocalNotifications, _super);
    function LocalNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalNotifications.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    LocalNotifications.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    LocalNotifications.prototype.schedule = function (options) { return core.cordova(this, "schedule", { "sync": true }, arguments); };
    LocalNotifications.prototype.update = function (options) { return core.cordova(this, "update", { "sync": true }, arguments); };
    LocalNotifications.prototype.clear = function (notificationId) { return core.cordova(this, "clear", {}, arguments); };
    LocalNotifications.prototype.clearAll = function () { return core.cordova(this, "clearAll", {}, arguments); };
    LocalNotifications.prototype.cancel = function (notificationId) { return core.cordova(this, "cancel", {}, arguments); };
    LocalNotifications.prototype.cancelAll = function () { return core.cordova(this, "cancelAll", {}, arguments); };
    LocalNotifications.prototype.isPresent = function (notificationId) { return core.cordova(this, "isPresent", {}, arguments); };
    LocalNotifications.prototype.isScheduled = function (notificationId) { return core.cordova(this, "isScheduled", {}, arguments); };
    LocalNotifications.prototype.isTriggered = function (notificationId) { return core.cordova(this, "isTriggered", {}, arguments); };
    LocalNotifications.prototype.hasType = function (id, type) { return core.cordova(this, "hasType", {}, arguments); };
    LocalNotifications.prototype.getType = function (id) { return core.cordova(this, "getType", {}, arguments); };
    LocalNotifications.prototype.getIds = function () { return core.cordova(this, "getIds", {}, arguments); };
    LocalNotifications.prototype.getScheduledIds = function () { return core.cordova(this, "getScheduledIds", {}, arguments); };
    LocalNotifications.prototype.getTriggeredIds = function () { return core.cordova(this, "getTriggeredIds", {}, arguments); };
    LocalNotifications.prototype.get = function (notificationId) { return core.cordova(this, "get", {}, arguments); };
    LocalNotifications.prototype.getAll = function () { return core.cordova(this, "getAll", {}, arguments); };
    LocalNotifications.prototype.getScheduled = function (notificationId) { return core.cordova(this, "getScheduled", {}, arguments); };
    LocalNotifications.prototype.getTriggered = function (notificationId) { return core.cordova(this, "getTriggered", {}, arguments); };
    LocalNotifications.prototype.addActions = function (groupId, actions) { return core.cordova(this, "addActions", {}, arguments); };
    LocalNotifications.prototype.removeActions = function (groupId) { return core.cordova(this, "removeActions", {}, arguments); };
    LocalNotifications.prototype.hasActions = function (groupId) { return core.cordova(this, "hasActions", {}, arguments); };
    LocalNotifications.prototype.getDefaults = function () { return core.cordova(this, "getDefaults", { "sync": true }, arguments); };
    LocalNotifications.prototype.setDefaults = function (defaults) { return core.cordova(this, "setDefaults", { "sync": true }, arguments); };
    LocalNotifications.prototype.getAllScheduled = function () { return core.cordova(this, "getAllScheduled", {}, arguments); };
    LocalNotifications.prototype.getAllTriggered = function () { return core.cordova(this, "getAllTriggered", {}, arguments); };
    LocalNotifications.prototype.on = function (eventName) { return core.cordova(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    LocalNotifications.prototype.fireEvent = function (eventName, args) { return core.cordova(this, "fireEvent", { "sync": true }, arguments); };
    LocalNotifications.prototype.fireQueuedEvents = function () { return core.cordova(this, "fireQueuedEvents", {}, arguments); };
    LocalNotifications.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalNotifications, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalNotifications.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalNotifications });
    LocalNotifications.pluginName = "LocalNotifications";
    LocalNotifications.plugin = "cordova-plugin-local-notification";
    LocalNotifications.pluginRef = "cordova.plugins.notification.local";
    LocalNotifications.repo = "https://github.com/katzer/cordova-plugin-local-notifications";
    LocalNotifications.platforms = ["Android", "iOS", "Windows"];
    LocalNotifications = tslib.__decorate([], LocalNotifications);
    return LocalNotifications;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalNotifications, decorators: [{
            type: i0.Injectable
        }], propDecorators: { hasPermission: [], requestPermission: [], schedule: [], update: [], clear: [], clearAll: [], cancel: [], cancelAll: [], isPresent: [], isScheduled: [], isTriggered: [], hasType: [], getType: [], getIds: [], getScheduledIds: [], getTriggeredIds: [], get: [], getAll: [], getScheduled: [], getTriggered: [], addActions: [], removeActions: [], hasActions: [], getDefaults: [], setDefaults: [], getAllScheduled: [], getAllTriggered: [], on: [], fireEvent: [], fireQueuedEvents: [] } });

exports.LocalNotifications = LocalNotifications;
