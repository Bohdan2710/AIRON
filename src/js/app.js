$(document).ready(function () {
  //mask
  // var phoneInput = document.getElementById("popup_form__phone");
  // var form = document.getElementById("form");

  // var phoneMask = IMask(phoneInput, {
  //   mask: "+{38} (000) 000-00-00",
  // });

  // form.addEventListener("submit", function (event) {
  //   if (phoneInput.value.replace(/\D/g, "").length < 10) {
  //     $(".popup_form__phone").addClass("error");
  //     event.preventDefault(); // Предотвращаем отправку формы
  //   } else {
  //     $(".popup_form__phone").removeClass("error");
  //   }
  // });

  // validation
  // (function () {
  //   "use strict";

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.querySelectorAll(".needs-validation");

  //   // Loop over them and prevent submission
  //   Array.prototype.slice.call(forms).forEach(function (form) {
  //     form.addEventListener(
  //       "submit",
  //       function (event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }

  //         form.classList.add("was-validated");
  //       },
  //       false
  //     );
  //   });
  // })();

  //slider
  // const swiperLessons = new Swiper(".#", {
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   speed: 1000,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   watchSlidesProgress: true,
  // });

  //menu
  $(".header__nav_list_mob").hide();

  $(".menu__btn_open").on("click", function () {
    $("body").addClass("hidden");
    $(".header__nav_list_mob").show();
    $(this).hide();
    $(".menu__btn_close").show();
  });

  $(".menu__btn_close").on("click", function () {
    $("body").removeClass("hidden");
    $(".header__nav_list_mob").hide();
    $(this).hide();
    $(".menu__btn_open").show();
  });

  //modal-form
  $(".popup_form").hide();
  // $(".contact__button, .header__button_mob").on("click", function () {
  //   $(".popup_form").show();
  // });

  $(".popup_form__close").on("click", function () {
    $(".popup_form").hide();
  });
});
