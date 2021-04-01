// $(document).ready(function () {
//   var menuButton = $(".button-hidden");
//   menuButton.on("click", function () {
//     $(".navbar-menu").toggleClass("navbar-menu--visible");
//   });
// }

var menuButton = document.querySelector(".button-hidden");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar-menu").classList.toggle("navbar-menu--visible");
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

