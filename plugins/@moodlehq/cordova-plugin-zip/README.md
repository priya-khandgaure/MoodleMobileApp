# cordova-plugin-zip (fork)

This is a fork of `cordova-plugin-zip` by [Moodle HQ](https://moodle.com/). If you are looking for the documentation, you can read the original at [MobileChromeApps/cordova-plugin-zip](https://github.com/MobileChromeApps/cordova-plugin-zip).

## Modifications from the original

We created this fork because we needed to include the following modifications in [our mobile application](https://github.com/moodlehq/moodleapp):

| PR | Description |
| -- | ----------- |
| [#92](https://github.com/MobileChromeApps/cordova-plugin-zip/pull/92) | Handle zip traversal vulnerability. Used a slightly different fix. |

You can see all the changes here: [3.1.0...moodlemobile:v3.1.0-moodle.1](https://github.com/MobileChromeApps/cordova-plugin-zip/compare/3.1.0...moodlemobile:v3.1.0-moodle.1)

## Installation

You can install this package using the [original installation instructions](https://github.com/MobileChromeApps/cordova-plugin-zip#installation), but installing this package instead:

```sh
cordova plugin add @moodlehq/cordova-plugin-zip@3.1.0-moodle.1
```
