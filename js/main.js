$(document).ready(function () {
  var menuButton = $(".navbar-menu__link-button");
  menuButton.on("click", function () {
    $(".navbar-menu__hidden").toggleClass("navbar-menu__hidden--visible");
  });
  var menuButton = $(".navbar-menu__link-buttons");
  menuButton.on("click", function () {
    $(".navbar-menu__hiddens").toggleClass("navbar-menu__hidden--visible");
  });




  var menuButton = $(".button-hidden");
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
    $("body").toggleClass("stopscroll");
  });

  const portfolioSwiper = new Swiper(".portfolio-slider", {
    // Optional parameters

    // slidesPerView: "auto",
    spaceBetween: 30,
    // watchOverflow: true,
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

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-button",
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
   document.addEventListener("keydown", (event) => {
     if (event.code === "Escape") {
       closeModal(event);
     }
   });


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

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $(".button-up").fadeIn();
      } else {
        $(".button-up").fadeOut();
      }
    });
    $(".button-up").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 700);
    });
  });
});
