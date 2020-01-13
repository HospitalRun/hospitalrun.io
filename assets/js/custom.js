(function($) {
  "use strict";

  // Sponsor Carousel
  if ($(".sponsor-slider").length > 0) {
    $(".sponsor-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      center: true,
      margin: 70,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2
        },
        768: {
          items: 3
        }
      }
    });
  }
})(jQuery);
