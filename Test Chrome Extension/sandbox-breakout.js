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
//chrome.storage.local.set({'user_name': 'localStorage_Extension'});

//localStorage.setItem('user_name', 'localStorage_Extension');
sessionStorage.setItem('user_name', 'sessionStorage_Extension');

chrome.storage.local.get('user_name',function(data){
  console.log(" Using chrome.storage.local.get   : " + data.user_name);
});

//console.log(" Using localStorage.getItem : " + localStorage.getItem('user_name'));
console.log(" Using sessionStorage.getItem : " + sessionStorage.getItem('user_name'));

/*
chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
    // do something more
});*/



// Break out of the sandbox and run `overwriteLanguage()` in the page context.
runInPageContext(overwriteLanguage, 'xx-XX');
