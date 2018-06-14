var scroll = window.scrollY;
var header = document.querySelector(".row0");
var header1 = document.querySelector(".row1");
var backtotop = document.querySelector("#backtotop");

var toggle = function() {
  header1.classList.toggle('hideBar', scroll < scrollY);
  header.classList.toggle('hideBar', scroll < scrollY);
  scroll = scrollY;
}

window.onscroll = toggle;

window.addEventListener("scroll", function(){
  if (scroll > 3000) {
    backtotop.style.visibility = "visible";
  } else {
    backtotop.style.visibility = "hidden";
  }
});
