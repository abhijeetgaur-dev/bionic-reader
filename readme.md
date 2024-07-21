# Bionic Reading Extension

Bionic Reading Extension is a Chrome extension that enhances readability by highlighting the beginning of words on any webpage. This extension allows users to toggle bionic reading mode on and off with the click of a button.

## Features

- Activate and deactivate bionic reading mode on any webpage.
- Modern, minimalist design for easy use.

## Installation

1. Clone the repository or download the ZIP file.
    ```bash
    git clone https://github.com/yourusername/bionic-reading-extension.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Click the "Activate" button to enable bionic reading mode on the current tab.
3. Click the "Deactivate" button to disable bionic reading mode on the current tab.

## Files

- `manifest.json`: Defines the extension's configuration and permissions.
- `popup.html`: The HTML for the extension's popup.
- `popup.js`: The JavaScript for handling button interactions in the popup.
- `content.js`: The JavaScript that applies and removes bionic reading styles on the webpage.
- `background.js`: The background script for the extension.
- `styles.css`: The CSS for styling the popup.

## Code Overview

### `manifest.json`
Defines the extension, including permissions and background script setup.
```json
{
  "manifest_version": 3,
  "name": "Bionic Reading Extension",
  "version": "1.0",
  "description": "Toggle bionic reading mode on any webpage.",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
