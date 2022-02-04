function addEventListenerOnList(list, eventType, effect) {
  list.forEach((element) => {
    element.addEventListener(eventType, () => effect(element));
  });
}

var showMenu = document.getElementsByClassName("show-menu")[0];
var menuBackground = document.getElementsByClassName("nav-hide")[0];
var menu = document.getElementsByClassName("nav-menu")[0];
var logoDark = document.getElementsByClassName("logo-dark")[0];
var logoWhite = document.getElementsByClassName("logo-white")[0];

//Open main menu
showMenu.addEventListener("click", () => {
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
});
// hover effect of main menu
function menueHoverEffect(itemArray) {
  addEventListenerOnList(itemArray, "mouseover", (element) => {
    itemArray
      .filter((e) => e !== element)
      .forEach((otherElement) => {
        otherElement.children[0].style.color = "grey";
      });
  });
  addEventListenerOnList(itemArray, "mouseout", (element) => {
    itemArray
      .filter((e) => e !== element)
      .forEach((otherElement) => {
        otherElement.children[0].style.color = "white";
      });
  });
}


// Hover effect for main menu
var menuItem = document.getElementsByClassName("menu-item");
menueHoverEffect(Array.from(menuItem));

// Open portfolio menu
var portfolioMenu = document.getElementsByClassName("portfolio-menu")[0];
document.getElementById("open-portfolio-menu").onclick = () => {
  if (portfolioMenu.style.height == "0px" || !portfolioMenu.style.height) {
    portfolioMenu.classList.add("portfolio-menu-opening");
    portfolioMenu.classList.remove("portfolio-menu-closing");
    portfolioMenu.style.height = "150px";
  } else {
    portfolioMenu.classList.remove("portfolio-menu-opening");
    portfolioMenu.classList.add("portfolio-menu-closing");
    portfolioMenu.style.height = 0;
  }
};

// Hover effect for portfolio menu
// var portfolioItem = document.getElementsByClassName("portfolio-link");
// menueHoverEffect(Array.from(portfolioItem));

