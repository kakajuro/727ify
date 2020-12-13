chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) { 
        if (request.action == "convertPage") {
            chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
                chrome.tabs.executeScript(null, {file: "content.js"});
                // console.log("rec1")
                // console.log(tab[0].id);
                // let msg = "go";
                // chrome.tabs.sendMessage(tab[0].id,msg);
                // console.log("recieved");
              });

        }
    }
);