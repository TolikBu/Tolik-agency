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
