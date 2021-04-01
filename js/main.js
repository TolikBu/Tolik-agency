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

const swiper = new Swiper(".swiper-container", {
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
