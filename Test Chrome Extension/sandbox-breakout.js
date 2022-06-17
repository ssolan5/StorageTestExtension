// Overwrite the `navigator.language` property to return a custom value.
const overwriteLanguage = (language) => {
  Object.defineProperty(navigator, 'language', {
    get: () => language,
  });
};

// Breaks out of the content script context by injecting a specially
// constructed script tag and injecting it into the page.
const runInPageContext = (method, ...args) => {
  // The stringified method which will be parsed as a function object.
  const stringifiedMethod = method instanceof Function
    ? method.toString()
    : `() => { ${method} }`;

  // The stringified arguments for the method as JS code that will reconstruct the array.
  const stringifiedArgs = JSON.stringify(args);

  // The full content of the script tag.
  const scriptContent = `
    // Parse and run the method with its arguments.
    (${stringifiedMethod})(...${stringifiedArgs});

    // Remove the script element to cover our tracks.
    document.currentScript.parentElement
      .removeChild(document.currentScript);
  `;

  // Create a script tag and inject it into the document.
  const scriptElement = document.createElement('script');
  scriptElement.innerHTML = scriptContent;
  document.documentElement.prepend(scriptElement);
};


// localStorage
chrome.storage.local.set({'user_name': 'Extension'});
chrome.storage.local.get('user_name',function(data){
  console.log("FOUND IT   :" + data.user_name);
});



// Break out of the sandbox and run `overwriteLanguage()` in the page context.
runInPageContext(overwriteLanguage, 'xx-XX');
