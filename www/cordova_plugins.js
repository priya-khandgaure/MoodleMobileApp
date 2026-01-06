cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.androidEntry",
      "file": "plugins/cordova-plugin-file/www/android/Entry.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.androidFileSystem",
      "file": "plugins/cordova-plugin-file/www/android/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.cookie-handler",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/cookie-handler.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.dependency-validator",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/dependency-validator.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.error-codes",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/error-codes.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.global-configs",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/global-configs.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.helpers",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/helpers.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.js-util",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/js-util.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.local-storage-store",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/local-storage-store.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.lodash",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/lodash.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.messages",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/messages.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.ponyfills",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/ponyfills.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.public-interface",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/public-interface.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.tough-cookie",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.url-util",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/url-util.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
      "id": "@moodlehq/cordova-plugin-advanced-http.http",
      "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/advanced-http.js",
      "pluginId": "@moodlehq/cordova-plugin-advanced-http",
      "clobbers": [
        "cordova.plugin.http"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-camera.Camera",
      "file": "plugins/@moodlehq/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "@moodlehq/cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/@moodlehq/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "@moodlehq/cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-camera.camera",
      "file": "plugins/@moodlehq/cordova-plugin-camera/www/Camera.js",
      "pluginId": "@moodlehq/cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/@moodlehq/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "@moodlehq/cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-file-opener.FileOpener2",
      "file": "plugins/@moodlehq/cordova-plugin-file-opener/www/plugins.FileOpener2.js",
      "pluginId": "@moodlehq/cordova-plugin-file-opener",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-file-transfer.FileTransferError",
      "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransferError.js",
      "pluginId": "@moodlehq/cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransferError"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-file-transfer.FileTransfer",
      "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransfer.js",
      "pluginId": "@moodlehq/cordova-plugin-file-transfer",
      "clobbers": [
        "window.FileTransfer"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/@moodlehq/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "@moodlehq/cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-intent.IntentShim",
      "file": "plugins/@moodlehq/cordova-plugin-intent/www/IntentShim.js",
      "pluginId": "@moodlehq/cordova-plugin-intent",
      "clobbers": [
        "intentShim"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/@moodlehq/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "@moodlehq/cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.CaptureAudioOptions",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "CaptureAudioOptions"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.CaptureImageOptions",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/CaptureImageOptions.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "CaptureImageOptions"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.CaptureVideoOptions",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "CaptureVideoOptions"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.CaptureError",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/CaptureError.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "CaptureError"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.MediaFileData",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/MediaFileData.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "MediaFileData"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.MediaFile",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/MediaFile.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "MediaFile"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.helpers",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/helpers.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "runs": true
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.capture",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/capture.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "clobbers": [
        "navigator.device.capture"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-media-capture.init",
      "file": "plugins/@moodlehq/cordova-plugin-media-capture/www/android/init.js",
      "pluginId": "@moodlehq/cordova-plugin-media-capture",
      "runs": true
    },
    {
      "id": "@moodlehq/cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/@moodlehq/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "@moodlehq/cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-statusbar.statusbar",
      "file": "plugins/@moodlehq/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "@moodlehq/cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "@moodlehq/cordova-plugin-zip.Zip",
      "file": "plugins/@moodlehq/cordova-plugin-zip/zip.js",
      "pluginId": "@moodlehq/cordova-plugin-zip",
      "clobbers": [
        "zip"
      ]
    },
    {
      "id": "@moodlehq/phonegap-plugin-push.PushNotification",
      "file": "plugins/@moodlehq/phonegap-plugin-push/www/push.js",
      "pluginId": "@moodlehq/phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    },
    {
      "id": "cordova-clipboard.Clipboard",
      "file": "plugins/cordova-clipboard/www/clipboard.js",
      "pluginId": "cordova-clipboard",
      "clobbers": [
        "cordova.plugins.clipboard"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "cordova-plugin-chooser.Chooser",
      "file": "plugins/cordova-plugin-chooser/www/chooser.js",
      "pluginId": "cordova-plugin-chooser",
      "clobbers": [
        "chooser"
      ]
    },
    {
      "id": "cordova-plugin-customurlscheme.LaunchMyApp",
      "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
      "pluginId": "cordova-plugin-customurlscheme",
      "clobbers": [
        "window.plugins.launchmyapp"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-local-notification.LocalNotification",
      "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
      "pluginId": "cordova-plugin-local-notification",
      "clobbers": [
        "cordova.plugins.notification.local"
      ]
    },
    {
      "id": "cordova-plugin-moodleapp.moodleapp",
      "file": "plugins/cordova-plugin-moodleapp/www/index.js",
      "pluginId": "cordova-plugin-moodleapp",
      "clobbers": [
        "cordova.MoodleApp"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation",
        "screen.orientation"
      ]
    },
    {
      "id": "cordova-plugin-wkuserscript.WKUserScript",
      "file": "plugins/cordova-plugin-wkuserscript/www/wkuserscript.js",
      "pluginId": "cordova-plugin-wkuserscript",
      "clobbers": [
        "window.WKUserScript"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-cookies.WKWebViewCookies",
      "file": "plugins/cordova-plugin-wkwebview-cookies/www/wkwebview-cookies.js",
      "pluginId": "cordova-plugin-wkwebview-cookies",
      "clobbers": [
        "window.WKWebViewCookies"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-file": "8.1.3",
    "es6-promise-plugin": "4.2.2",
    "@moodlehq/cordova-plugin-advanced-http": "3.3.1-moodle.1",
    "@moodlehq/cordova-plugin-camera": "7.0.0-moodle.1",
    "@moodlehq/cordova-plugin-file-opener": "4.0.0-moodle.1",
    "@moodlehq/cordova-plugin-file-transfer": "2.0.0-moodle.2",
    "@moodlehq/cordova-plugin-inappbrowser": "6.0.0-moodle.1",
    "@moodlehq/cordova-plugin-intent": "2.2.0-moodle.3",
    "@moodlehq/cordova-plugin-ionic-webview": "5.0.0-moodle.5",
    "@moodlehq/cordova-plugin-media-capture": "5.0.0-moodle.1",
    "@moodlehq/cordova-plugin-qrscanner": "3.0.1-moodle.5",
    "@moodlehq/cordova-plugin-statusbar": "4.0.0-moodle.3",
    "@moodlehq/cordova-plugin-zip": "3.1.0-moodle.1",
    "@moodlehq/phonegap-plugin-push": "4.0.0-moodle.10",
    "cordova-clipboard": "1.3.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-badge": "0.8.9",
    "cordova-plugin-chooser": "1.3.1",
    "cordova-plugin-customurlscheme": "5.0.2",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-local-notification": "1.0.0",
    "cordova-plugin-moodleapp": "0.0.0",
    "cordova-plugin-network-information": "3.0.0",
    "cordova-plugin-prevent-override": "1.0.1",
    "cordova-plugin-screen-orientation": "3.0.4",
    "cordova-plugin-wkuserscript": "1.0.1",
    "cordova-plugin-wkwebview-cookies": "1.0.1",
    "cordova-sqlite-storage": "6.1.0",
    "nl.kingsquare.cordova.background-audio": "1.0.1"
  };
});