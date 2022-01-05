var showMenu = document.getElementsByClassName("show-menu")[0];
var menuBackground = document.getElementsByClassName("nav-menu")[0];
var menu = document.getElementsByClassName("nav-hide")[0];
var logoDark = document.getElementsByClassName("logo-dark")[0];
var logoWhite = document.getElementsByClassName("logo-white")[0];

showMenu.onclick = () => {
  showMenu.classList.contains("open")
    ? showMenu.classList.remove("open")
    : showMenu.classList.add("open");
  menuBackground.style.backgroundColor =
    menuBackground.style.backgroundColor == "black" ? "transparent" : "black";
  menu.style.display = menu.style.display == "block" ? "none" : "block";
  logoDark.style.display =
    menuBackground.style.backgroundColor == "black" ? "none" : "block";
  logoWhite.style.display =
    menuBackground.style.backgroundColor == "black" ? "block" : "none";
};

var menuItem = document.getElementsByClassName("menu-item");

console.log(menuItem);
const menuItemArray = Array.from(menuItem);
menuItemArray.forEach((element) => {
  element.onmouseover = () => {
    menuItemArray
      .filter((e) => e !== element)
      .forEach((otherElement) => {
        otherElement.children[0].style.color = "grey";
      });
  };
});
menuItemArray.forEach((element) => {
  element.onmouseout = () => {
    menuItemArray
      .filter((e) => e !== element)
      .forEach((otherElement) => {
        otherElement.children[0].style.color = "white";
      });
  };
});
