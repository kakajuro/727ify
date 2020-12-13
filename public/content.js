console.log("727ify active");
// document.body.textContent="727";

//chrome.tabs.executeScript(null, {file: "content.js"});
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log("recieved" + message);
// }

var words = document.querySelectorAll('p,li,span,h1,h2,h3,h4,ul,nav,button,a,tr,td');
for (var i = 0, l = words.length; i < l; i++) {
    words[i].innerHTML = "727";
}