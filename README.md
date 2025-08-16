# fxhash-snippet-patch-math-pow
A simple browser extension that injects a very specific patch into a specific snippet in the FXhash template

Tested locally in Chromium and Firefox.

If you want to try this on your local device, you have to download the files from this repository (the `manifest.json` and `patch_math_pow_58_11.js` file), and follow instructions below.

# Firefox instructions
Open Firefox and navigate to the debugging page by typing `about:debugging` in the address bar.

- Click "This Firefox" on the left-hand sidebar.
- Click the "Load Temporary Add-on..." button.
- Select any file from the plugin's folder.
- The plugin will be active until you close your browser.

# Chromium intructions (this might work as well for Chrome, Brave, Edge)
- Open your browser and go to the extensions page by typing `chrome://extensions` in the address bar.
- In the top-right corner, turn on "Developer mode" using the toggle switch.
- Click the "Load unpacked" button that appears.
- Select the entire plugin folder (the one containing your manifest.json file).
- The plugin will be active for your current session. To use it again after restarting your browser, you will need to repeat these steps.
