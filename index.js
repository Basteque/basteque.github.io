function navPortfolio() {
    window.location = "test.html";
}

function navCV() {
    window.location = "image/CV.png";
}

function navAbout() {
    window.location = "https://www.linkedin.com/in/basile-m-22bb3baa/";
}

var pf = document.querySelector(".Left h1")
var cv = document.querySelector(".Center h1");
var am = document.querySelector(".Right h1");

pf.addEventListener('click', navPortfolio);
am.addEventListener('click', navAbout);
cv.addEventListener('click', navCV);