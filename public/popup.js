function sendMessage(){
    chrome.extension.sendMessage({
    action: "convertPage",
});
}

document.addEventListener('DOMContentLoaded', function() {
var link = document.getElementById('mainButton');
// onClick's logic below:
link.addEventListener('click', function() {
    sendMessage();
});
});