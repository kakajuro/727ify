function sendMessage(){
    chrome.extension.sendMessage({
    action: "convertPage",
});
}

document.addEventListener('DOMContentLoaded', function() {
var link = document.getElementById('mainButton');

link.addEventListener('click', function() {
    sendMessage();
});
});