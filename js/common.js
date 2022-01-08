function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    var opacity = 1;
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight - 0.6;
    }
  
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }
  // Fadeout Effect for title introduction section
var homeTitle = document.getElementsByClassName("hero-intro")[0];

window.addEventListener("wheel", () => fadeOutOnScroll(homeTitle));
