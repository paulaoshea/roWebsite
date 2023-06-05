/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("header nav").meanmenu();
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  /* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  //   var swiper = new Swiper(".heroslider", {
  //     spaceBetween: 30,
  //     centeredSlides: true,
  //     slidesPerView: "auto",
  //     paginationClickable: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //       dynamicBullets: true,
  //     },
  //   });

  /* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var swiper = new Swiper(".swiper-product-filters", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerColumn: 1,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerColumn: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerColumn: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
});
