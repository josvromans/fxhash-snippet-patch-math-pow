# fxhash-snippet-patch-math-pow
A simple browser extension that injects a very specific patch into a specific snippet in the FXhash template. Thanks Piter Pasma for this suggestion.

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

# Things to keep in mind
- Currently the extension will run at every page in your browser, on any url. It only attempts to do something when there is a element on the page with 'id="fxhash-snippet"'. Which is not expected to be on other places except the fxhash live render view.

# Improvements
- Whitelist specific urls. Could be as simple as those that start with `https://gateway.fxhash2.xyz/ipfs/` although users might serve the live views from another ipfs url. 
- Investigate the `MutationObserver` approach. I could not get it to work with handling how parts get loaded into the page. Maybe it is currenly overengineerd, the entire `MutationObserver` thing is a suggestion from Gemini.
- Consider alternative approaches that are more robust. The powers of 58 could be hardcoded as an Array literal [24986644000165536000, 430804206899405800, 7427658739644928, 128063081718016, 2207984167552, 38068692544, 656356768, 11316496, 195112, 3364, 58, 1] as suggested by Piter
- Describe the context, add the original snippet, desribe the issue and the patch etc

# Contributors welcome
You are free to fork this repo or just make an entire new and better version. This is my first attempt to get things working for me locally.
