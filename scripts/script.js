// JavaScript Document
var hamburgerMenu = document.querySelector("nav button");

function toggleMenu(event) {
  var menu = event.target.parentNode;
  menu.classList.toggle("toonMenu");
}

hamburgerMenu.addEventListener("click", toggleMenu);
