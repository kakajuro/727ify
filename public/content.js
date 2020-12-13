console.log("727ify active");

var words = document.querySelectorAll('p,li,span,h1,h2,h3,h4,ul,nav,button,a,tr,td');
for (var i = 0, l = words.length; i < l; i++) {
    words[i].innerHTML = "727";
}