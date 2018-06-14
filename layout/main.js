var scroll = window.scrollY;
var header = document.querySelector(".row0");
var header1 = document.querySelector(".row1");
var backtotop = document.querySelector("#backtotop");
var mainav = document.querySelector("#mainav");

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

var burger = document.querySelector(".burger");
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");

burger.addEventListener("click", function(){
  b1.classList.toggle("b1-anim");
  b2.classList.toggle("b2-anim");
  b3.classList.toggle("b3-anim");
  document.querySelector(".ul").classList.toggle("navLiMobile");
  mainav.classList.toggle("navLiMobile");
});
