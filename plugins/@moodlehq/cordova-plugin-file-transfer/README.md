# cordova-plugin-file-transfer (fork)

This is a fork of `cordova-plugin-file-transfer` by [Moodle HQ](https://moodle.com/). If you are looking for the documentation, you can read the original at [apache/cordova-plugin-file-transfer](https://github.com/apache/cordova-plugin-file-transfer).

## Modifications from the original

We created this fork because we needed to include the following modifications in [our mobile application](https://github.com/moodlehq/moodleapp):

| PR | Description |
| -- | ----------- |
| - | Return headers along with the file entry when downloading a file |

You can see all the changes here: [2.0.0...moodlemobile:v2.0.0-moodle.2](https://github.com/apache/cordova-plugin-file-transfer/compare/2.0.0...moodlemobile:v2.0.0-moodle.2)

## Installation

You can install this package using the [original installation instructions](https://github.com/apache/cordova-plugin-file-transfer#installation), but installing this package instead:

```sh
cordova plugin add @moodlehq/cordova-plugin-file-transfer@2.0.0-moodle.2
```
