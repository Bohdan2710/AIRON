$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("back");
    } else {
      $(".header").removeClass("back");
    }
  });
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
  const swiper1 = new Swiper(".story_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  const swipre2 = new Swiper(".live_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  var swiper3 = new Swiper('.previous_voyages_swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    initialSlide: 3,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })


  const swipre4 = new Swiper(".transport_swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  var swiperSoon = new Swiper(".soon__swiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        if(current<10){
          return '0' + current;
        } else {
          return current;
        }
      }
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.65,
        spaceBetween: 30,
      },
    },
  });
  var swiperSoon2 = new Swiper(".soon__swiper2", {
    spaceBetween: 10,
    loop: true,
    thumbs: {
      swiper: swiperSoon,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  //menu
  $(".menu__btn_open").on("click", function () {
    $("body").toggleClass("hidden");
    $(".header__nav_list_mob").toggleClass('active');
    $(".menu-icon").toggleClass('active');
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
