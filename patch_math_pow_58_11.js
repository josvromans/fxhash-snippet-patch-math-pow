(function() {
  const codeToInject = `Math.pow = (a,b) => (a===58 && b===11) ? 24986644000165536000 : a**b;`;

  function applyPatch() {
    console.log("Looking for fxhash-snippet to patch..");
    
    // find the script tag <script id="fxhash-snippet">
    // if it exists without containing the patch yet, prepend the patch.
    const fxhashSnippet = document.getElementById('fxhash-snippet');
    if (fxhashSnippet && fxhashSnippet.innerHTML  && fxhashSnippet.innerHTML.indexOf(codeToInject < 0)) {
      console.log("Inject Math.pow patch in fxhash-snippet.");

      fxhashSnippet.innerHTML = codeToInject + fxhashSnippet.innerHTML;

      // Stop observing once we've found and modified the code.
      observer.disconnect();
    } else {
        console.log("Snippet not found, or already patched.");
    }
  }

  // Create a MutationObserver to watch for changes in the DOM.
  // This is the key to handling dynamically loaded content.
  const observer = new MutationObserver((mutationsList, observer) => {
    // We only need to check when new nodes (like script tags) are added.
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        applyPatch();
        break; // Stop after the first childList mutation and re-evaluate.
      }
    }
  });

  // Start observing the entire document for changes in its children and descendants.
  // The observer is set to run as soon as the DOM is available, at document_start.
  observer.observe(document.documentElement, { 
    childList: true, 
    subtree: true 
  });

  // Also run the check immediately in case the script is already present in the initial HTML.
  applyPatch();
})();
