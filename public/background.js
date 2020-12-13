chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) { 
        if (request.action == "convertPage") {
            chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
                chrome.tabs.executeScript(null, {file: "content.js"});
              });

        }
    }
);