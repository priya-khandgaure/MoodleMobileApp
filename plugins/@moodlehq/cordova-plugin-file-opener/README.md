# cordova-plugin-file-opener (fork)

This is a fork of `cordova-plugin-file-opener2` by [Moodle HQ](https://moodle.com/). If you are looking for the documentation, you can read the original at [pwlin/cordova-plugin-file-opener2](https://github.com/pwlin/cordova-plugin-file-opener2).

## Modifications from the original

We created this fork because we needed to include the following modifications in [our mobile application](https://github.com/moodlehq/moodleapp):

| PR | Description |
| -- | ----------- |
| [#343](https://github.com/pwlin/cordova-plugin-file-opener2/pull/343) | feat(android): remove READ_EXTERNAL_STORAGE permission |

You can see all the changes here: [2a8f780...moodlemobile:v4.0.0-moodle.1](https://github.com/pwlin/cordova-plugin-file-opener2/compare/2a8f7808253180e1c0b619cde7f8d0ddba4bf744...moodlemobile:v4.0.0-moodle.1)

## Installation

You can install this package using the [original installation instructions](https://github.com/pwlin/cordova-plugin-file-opener2#installation), but installing this package instead:

```sh
cordova plugin add @moodlehq/cordova-plugin-file-opener@4.0.0-moodle.1
```
