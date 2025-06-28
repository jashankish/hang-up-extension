# Hang Up Button Remover
A fun little Chrome Extension to Hide the "Hang Up" Button on Google Meetings

## Introduction
This Chrome extension provides a simple way to hide the "Hang up" button on Google Meet calls. Please note that this extension only affects your own view of the button and does not affect the hang-up button in minimized or in-window viewings. Other participants can also still view the hang-up button and end the call.

## Installation
### 1. Download the Extension:

```Bash
git clone https://github.com/jashankish/hang-up-extension
```

### 2. Load the Extension in Chrome:

Open Chrome and go to chrome://extensions/.

* Enable "Developer mode" in the top right corner.
* Click "Load unpacked".
* Select the folder you cloned the repo into.

## How It Works
The extension injects a script into Google Meet pages that targets the "Hang up" button element and sets its display style to none, effectively hiding it from view.

## Important Considerations
Google Meet Updates: Google may update their website, potentially breaking my extension. You might need to adjust the selectors in the content.js file to ensure continued functionality.

## Contributing
If you'd like to contribute to this extension, feel free to fork the repository and submit a pull request! :)

Note: This extension is for educational purposes and for fun personal use. Please use it responsibly and ethically ty ty.