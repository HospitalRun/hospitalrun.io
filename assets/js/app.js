(function($) {
  "use strict";

  // Preloader
  if ($(".loading-main").length > 0) {
    $(window).on("load", function() {
      $(".loading-main").fadeOut();
      $(".pre-loader")
        .delay(350)
        .fadeOut("slow", 0.0);
      $("body").css({
        "overflow-y": "scroll"
      });
    });
  }
  // Responsive menu
  $(".slimmenu").slimmenu({
    resizeWidth: "992",
    collapserTitle: "",
    animSpeed: "fast",
    easingEffect: null,
    indentChildren: true
  });
  // Slider Carousel
  if ($(".slider-carousel").length > 0) {
    $(".slider-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        }
      }
    });
  }
  // Company Carousel
  if ($(".company-slider").length > 0) {
    $(".company-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      center: true,
      margin: 70,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3
        },
        768: {
          items: 5
        }
      }
    });
  }
  // Testimonial Carousel
  if ($(".testimonial-slider").length > 0) {
    $(".testimonial-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 60,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      }
    });
  }
  if ($(".testimonial-slider2").length > 0) {
    $(".testimonial-slider2").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 60,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  if ($(".team-carousel").length > 0) {
    $(".team-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 30,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 4
        }
      }
    });
  }

  // Parallax Window

  if ($(".parallax-window").length > 0) {
    $(".parallax-window").parallax({
      naturalWidth: 600,
      naturalHeight: 400
    });
  }
  // Wow Animation
  var wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 10, // default
    mobile: true, // default
    live: true // default
  });
  wow.init();
  // Video Modal
  if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0) {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 0,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
  }
  // File Upload
  $(".form-action").on("change", ".file-upload-field", function() {
    $(this)
      .parent(".file-upload")
      .attr(
        "data-text",
        $(this)
          .val()
          .replace(/.*(\/|\\)/, "")
      );
  });
  // timeline animation

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  // Home Top
  var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 1000,
    $back_to_top = $(".home-top");
  $back_to_top.on("click", function(event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0
      },
      scroll_top_duration
    );
  });

  $(".rating").rating();

  $(".ratingEvent").rating({
    rateEnd: function(v) {
      $("#result").text(v);
    }
  });

  // search
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById("search-input"),
    resultsContainer: document.getElementById("results-container"),
    json: "/search.json",
    searchResultTemplate:
      '<div class="search-results"><div class="search-content"><h3><a href="{url}">{title}</a></h3></div></div>'
  });

  $(".menu-heading .btn").on("click", function() {
    $(this)
      .next("div")
      .toggleClass("active");
  });
  // Sticky Sidebar
})(jQuery);

jQuery(function() {
  if ($(".doc-sidebar-menu").length > 0) {
    // Adding Script Conditionally for the doc page

    var $sidebar = $(".sidebar"),
      $content = $(".content"),
      $tutorial = $(".tutorial-content"),
      $window = $(window),
      offset = $content.offset().top + 60;

    var found = true;

    var $el;

    var href = $sidebar
      .find("a")
      .first()
      .attr("href");

    if (href !== undefined && href.charAt(0) === "#") {
      setActiveSidebarLink();

      $(window).on("scroll", function() {
        throttle(function() {
          setActiveSidebarLink();
          setSidebar();
        }, 100)();
      });
    }

    function setSidebar() {
      var offset = 100,
        bottom =
          $tutorial.offset().top +
          $tutorial.outerHeight() -
          $sidebar.outerHeight() -
          offset;
      if (window.scrollY > bottom) {
        $sidebar
          .css("position", "absolute")
          .css("top", $tutorial.outerHeight() - $sidebar.outerHeight());
      } else if (window.scrollY > $tutorial.offset().top) {
        $sidebar.css("position", "fixed").css("top", offset);
      } else {
        $sidebar.css("position", "absolute").css("top", 0);
      }
    }

    function setActiveSidebarLink() {
      $(".sidebar a").removeClass("active");
      var $closest = getClosestHeader();
      $closest.addClass("active");
    }
  }
});
function getClosestHeader() {
  var $links = $(".sidebar a"),
    top = window.scrollY,
    $last = $links.first(),
    $content = $(".tutorial-content");

  //	console.log(top);

  if (top < 300) {
    return $last;
  }

  if (top + window.innerHeight >= $content.offset().top + $content.height()) {
    return $links.last();
  }

  for (var i = 0; i < $links.length; i++) {
    var $link = $links.eq(i),
      href = $link.attr("href");

    if (href !== undefined && href.charAt(0) === "#" && href.length > 1) {
      var $anchor = $(href);

      if ($anchor.length > 0) {
        var offset = $anchor.offset();

        if (top < offset.top - window.innerHeight / 2) {
          return $last;
        }

        $last = $link;
      }
    }
  }
  return $last;
}

$(function() {
  $(".themeix-dropdown").on("click", function() {
    $(this).toggleClass("active");
  });
});

function throttle(callback, limit) {
  var wait = false;
  return function() {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function() {
        wait = false;
      }, limit);
    }
  };
}
