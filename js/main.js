$(document).ready(function () {
  var menuButton = document.querySelector(".navbar-menu__link-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-menu__hidden")
      .classList.toggle("navbar-menu__hidden--visible");
  });

  var menuButton = document.querySelector(".button-hidden");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-menu")
      .classList.toggle("navbar-menu--visible");
    document.querySelector("body").classList.toggle("stopscroll");
  });

  const portfolioSwiper = new Swiper(".portfolio-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

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
    slidesPerView: "auto",
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-heading__button--next",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    $(this).attr("data-href");
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите ваше имя",
          minlength: "Имя должно содержать не менее 2 символов",
        },
        email: {
          required: "Email очень важен",
          email: "Email должен быть в стиле name@domain.com",
        },
        phone: {
          required: "Телефон требуется для связи",
          minlength: "Номер должен содержать минимум 11 цифр",
        },
      },
    });
  });

  $("input[name=phone]").mask("+7 (000) 000 0000");
});
