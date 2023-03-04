# TimeSand Chrome Extension

Track the time you spend on websites with the TimeSand Chrome Extension.

## Description

This extension tracks the amount of time you spend on each website you visit and displays it in a popup window. It also includes an icon in the Chrome toolbar that displays the total time you have spent on websites since the extension was installed.

## Installation

1. Clone the repository or download the code as a ZIP file and extract it to a local directory.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the local directory where you extracted the code.
5. The extension should now be installed and the TimeSand icon should appear in the Chrome toolbar.

## Usage

1. Click on the TimeSand icon in the Chrome toolbar to open the popup window.
2. The popup window will display a list of websites you have visited along with the amount of time you have spent on each website. {TBD}
3. The total time spent on websites since the extension was installed will be displayed at the top of the popup window. {TBD}
4. The list of websites will automatically update as you visit new websites. {TBD}
5. To reset the time tracker, click on the "Reset" button at the bottom of the popup window. {TBD}

## Code

The code for the TimeSand extension is written in JavaScript and includes the following files:

- `manifest.json`: This file includes information about the extension such as its name, description, version, and permissions.
- `popup.html`: This file defines the layout of the popup window that displays the time tracker.
- `scripts/content.js`: This file is a content script that runs on every website and sends information about the website to the background script.
- `scripts/background.js`: This file is a background script that tracks the time spent on each website and sends the information to the popup window.


