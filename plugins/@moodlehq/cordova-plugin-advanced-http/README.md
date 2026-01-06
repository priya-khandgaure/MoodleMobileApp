# Cordova Advanced HTTP (fork)

This is a fork of `cordova-plugin-advanced-http` by [Moodle HQ](https://moodle.com/). If you are looking for the documentation, you can read the original at [silkimen/cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http).

## Modifications from the original

We created this fork because we needed to include the following modifications in [our mobile application](https://github.com/moodlehq/moodleapp):

| PR | Description |
| -- | ----------- |
| [cordova-plugin-advanced-http#504](https://github.com/silkimen/cordova-plugin-advanced-http/pull/504) | Omit Accept-Charset header  |

You can see all the changes here: [3.3.1...moodlemobile:v3.3.1-moodle.1](https://github.com/silkimen/cordova-plugin-advanced-http/compare/f6c3ea7f66fbe57770f53546e4af16a74bc2e0cf...moodlemobile:v3.3.1-moodle.1)

## Installation

You can install this package using the [original installation instructions](https://github.com/silkimen/cordova-plugin-advanced-http#installation), but installing this package instead:

```sh
cordova plugin add @moodlehq/cordova-plugin-advanced-http@3.3.1-moodle.1
```
