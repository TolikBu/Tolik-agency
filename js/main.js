// $(document).ready(function () {
//   var menuButton = $(".button-hidden");
//   menuButton.on("click", function () {
//     $(".navbar-menu").toggleClass("navbar-menu--visible");
//   });
// }

var menuButton = document.querySelector(".button-hidden");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".navbar-menu")
    .classList.toggle("navbar-menu--visible");
});

const portfolioSwiper = new Swiper(".portfolio-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio-heading__button--next",
    prevEl: ".portfolio-heading__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-heading__button--next",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
