//   all ------------------
function initTowhub() {
  "use strict";
  //   loader ------------------
  $(".loader-wrap").fadeOut(300, function () {
    $("#main").animate(
      {
        opacity: "1",
      },
      600
    );
  });
  //   Background image ------------------
  var a = $(".bg");
  a.each(function (a) {
    if ($(this).attr("data-bg"))
      $(this).css("background-image", "url(" + $(this).data("bg") + ")");
  });
  //   swiper ------------------
  if ($(".hero-slider").length > 0) {
    var hs = new Swiper(".hero-slider .swiper-container", {
      preloadImages: false,
      loop: true,
      speed: 1400,
      spaceBetween: 0,
      pagination: {
        el: ".listing-carousel_pagination-wrap",
        clickable: true,
      },
      navigation: {
        nextEl: ".slider-hero-button-next",
        prevEl: ".slider-hero-button-prev",
      },
    });
  }
  function kpsc() {
    $(".slide-progress").css({
      width: "100%",
      transition: "width 3000ms",
    });
  }
  function eqwe() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }
  if ($(".clients-carousel").length > 0) {
    var j2 = new Swiper(".clients-carousel .swiper-container", {
      preloadImages: false,
      freeMode: false,
      slidesPerView: 3,
      spaceBetween: 60,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      navigation: {
        nextEl: ".cc-next",
        prevEl: ".cc-prev",
      },
      breakpoints: {
        1064: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        520: {
          slidesPerView: 1,
        },
      },
    });
  }
  if ($(".gallery-carousel").length > 0) {
    var j2 = new Swiper(".gallery-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 5, // or 'auto'
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      slidesPerGroup: 5,
      spaceBetween: 5,
      loop: false,
      grabCursor: false,
      mousewheel: false,
      centeredSlides: false,
      navigation: {
        nextEl: ".g-control-next",
        prevEl: ".g-control-prev",
      },
      breakpoints: {
        1064: {
          slidesPerView: 3, // or 'auto'
          slidesPerColumn: 2,
          slidesPerGroup: 3,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 1, // or 'auto'
          slidesPerColumn: 2,
          slidesPerColumnFill: "none",
          slidesPerGroup: 1,
          spaceBetween: 5,
        },
      },
    });
  }

  if ($(".dashboard-header-stats").length > 0) {
    var j2 = new Swiper(".dashboard-header-stats .swiper-container", {
      preloadImages: false,
      freeMode: false,
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
      grabCursor: true,
      mousewheel: false,

      navigation: {
        nextEl: ".dhs-next",
        prevEl: ".dhs-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
      },
    });
  }
  //   instagram ------------------
  var actoket = $("#insta-content").data("instatoken");
  var token = actoket,
    num_photos = 12;
  $.ajax({
    url: "https://api.instagram.com/v1/users/self/media/recent",
    dataType: "jsonp",
    type: "GET",
    data: {
      access_token: token,
      count: num_photos,
    },
    success: function (data) {
      var x;
      for (x in data.data) {
        $("#insta-content").append(
          '<a target="_blank" href="' +
            data.data[x].link +
            '"><img src="' +
            data.data[x].images.low_resolution.url +
            '"></a>'
        );
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
  //   Isotope------------------
  function initIsotope() {
    if ($(".gallery-items").length) {
      var ami = $(".gallery-items").isotope({
        singleMode: true,
        itemSelector:
          ".gallery-item, .gallery-item-second, .gallery-item-three",
        transformsEnabled: true,
        transitionDuration: "700ms",
        resizable: true,
      });
      ami.imagesLoaded(function () {
        ami.isotope("layout");
      });
      $(".gallery-filters").on("click", "a.gallery-filter", function (a) {
        a.preventDefault();
        var brec = $(this).attr("data-filter");
        // ami.isotope({
        //     filter: brec
        // });
        $(".gallery-filters a").removeClass("gallery-filter-active");
        $(this).addClass("gallery-filter-active");
      });
    }
    if ($(".restor-menu-widget").length) {
      var aresm = $(".restor-menu-widget").isotope({
        singleMode: true,
        itemSelector: ".restmenu-item",
        transformsEnabled: true,
        transitionDuration: "700ms",
        resizable: true,
      });
      aresm.imagesLoaded(function () {
        aresm.isotope("layout");
      });
      $(".menu-filters").on("click", "a", function (a) {
        a.preventDefault();
        var brec = $(this).attr("data-filter");
        aresm.isotope({
          filter: brec,
        });
        $(".menu-filters a").removeClass("menu-filters-active");
        $(this).addClass("menu-filters-active");
      });
    }
  }
  initIsotope();
  //   lightGallery------------------
  $(".image-popup").lightGallery({
    selector: "this",
    cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
    download: false,
    counter: false,
  });
  var o = $(".lightgallery"),
    p = o.data("looped");
  o.lightGallery({
    selector: ".lightgallery a.popup-image",
    cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
    download: false,
    loop: false,
    counter: false,
  });
  function initHiddenGal() {
    $(".dynamic-gal").on("click", function () {
      var dynamicgal = eval($(this).attr("data-dynamicPath"));
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: dynamicgal,
        download: false,
        loop: false,
        counter: false,
      });
    });
  }
  initHiddenGal();
  $("<span class='footer-bg-pin'></span>").duplicate(4).prependTo(".footer-bg");
  function heroAnim() {
    function a(a) {
      var b = a.length,
        c,
        d;
      while (b) {
        d = Math.floor(Math.random() * b--);
        c = a[b];
        a[b] = a[d];
        a[d] = c;
      }
      return a;
    }

    var b = $(".footer-bg-pin");
    $(a(b).slice(0, $(".footer-bg").data("ran"))).each(function (a) {
      var bc = $(this);
      b.removeClass("footer-bg-pin-vis");
      bc.addClass("footer-bg-pin-vis");
    });
  }
  setInterval(function () {
    heroAnim();
  }, 2000);
  $(".lang-action li a").on("click", function (e) {
    e.preventDefault();
    var thdatlantext = $(this).data("lantext");
    $(".lang-action li a").removeClass("current-lan");
    $(this).addClass("current-lan");
    $(".show-lang span strong").text(thdatlantext);
  });
  $(".category-carousel-item").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("checket-cat");
  });
  $(".show-more-snopt").on("click", function (e) {
    e.preventDefault();
    $(".show-more-snopt-tooltip").toggleClass("show-more-snopt-tooltip_vis");
  });
  // calc ------------------
  $("form[name=rangeCalc]").jAutoCalc("destroy");
  $("form[name=rangeCalc]").jAutoCalc({
    initFire: true,
    decimalPlaces: 1,
    emptyAsZero: false,
  });
  // date picker------------------
  $('input[name="datepicker-here"]').daterangepicker({
    autoUpdateInput: false,
    parentEl: $(".date-container"),
    singleDatePicker: true,
    locale: {
      cancelLabel: "Clear",
    },
  });
  $('input[name="datepicker-here-time"]').daterangepicker({
    autoUpdateInput: false,
    parentEl: $(".date-container2"),
    singleDatePicker: true,
    timePicker: true,
    locale: {
      cancelLabel: "Clear",
    },
  });
  $('input[name="datepicker-here-time"]').on("apply.daterangepicker", function (
    ev,
    picker
  ) {
    $(this).val(picker.startDate.format("MM/DD/YYYY hh:mm A"));
  });
  $('input[name="datepicker-here-time"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
  $('input[name="datepicker-here"]').on("apply.daterangepicker", function (
    ev,
    picker
  ) {
    $(this).val(picker.startDate.format("MM/DD/YYYY"));
  });
  $('input[name="datepicker-here"]').on("cancel.daterangepicker", function (
    ev,
    picker
  ) {
    $(this).val("");
  });
  $('input[name="dates"]').daterangepicker({
    autoUpdateInput: false,
    parentEl: $(".date-container3"),
    locale: {
      cancelLabel: "Clear",
    },
  });
  $('input[name="dates"]').on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("MM/DD/YYYY") +
        " - " +
        picker.endDate.format("MM/DD/YYYY")
    );
  });
  $('input[name="dates"]').on("cancel.daterangepicker", function (ev, picker) {
    $(this).val("");
  });
  //   appear------------------
  $(".stats").appear(function () {
    $(".num").countTo();
  });
  // Share   ------------------
  $(".sfcs").on("click", function () {
    $(this).toggleClass("vis-buts h");
    $(".fixed-scroll-column-share-container").slideToggle(400);
  });
  $(".share-container").share({
    networks: ["facebook", "pinterest", "googleplus", "twitter", "linkedin"],
  });
  var shrcn = $(".share-container");
  function showShare() {
    shrcn.removeClass("isShare");
    shrcn.addClass("visshare");
  }
  function hideShare() {
    shrcn.addClass("isShare");
    shrcn.removeClass("visshare");
  }
  $(".showshare").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("vis-butsh");
    if ($(".share-container").hasClass("isShare")) showShare();
    else hideShare();
  });
  //   accordion ------------------
  $(".accordion a.toggle").on("click", function (a) {
    a.preventDefault();
    $(".accordion a.toggle").removeClass("act-accordion");
    $(this).addClass("act-accordion");
    if ($(this).next("div.accordion-inner").is(":visible")) {
      $(this).next("div.accordion-inner").slideUp();
    } else {
      $(".accordion a.toggle").next("div.accordion-inner").slideUp();
      $(this).next("div.accordion-inner").slideToggle();
    }
  });
  //   tabs------------------
  $(".tabs-menu a").on("click", function (a) {
    a.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var b = $(this).attr("href");
    $(this)
      .parents(".tabs-act")
      .find(".tab-content")
      .not(b)
      .css("display", "none");
    $(b).fadeIn();
  });
  $(".change_bg a").on("click", function () {
    var bgt = $(this).data("bgtab");
    $(".bg_tabs").css("background-image", "url(" + bgt + ")");
  });
  // twitter ------------------
  if ($("#footer-twiit").length > 0) {
    var config1 = {
      profile: {
        screenName: "BaatBiharKii",
      },
      domId: "footer-twiit",
      // "maxTweets": 4,
      enableLinks: true,
      showImages: true,
    };
    twitterFetcher.fetch(config1);
  }

  // scroll animation ------------------
  $(".scroll-init  ul ").singlePageNav({
    filter: ":not(.external)",
    updateHash: false,
    offset: 75,
    threshold: 150,
    speed: 1200,
    currentClass: "act-link",
  });
  $(".rate-item-bg").each(function () {
    $(this)
      .find(".rate-item-line")
      .css({
        width: $(this).attr("data-percent"),
      });
  });
  $(window).on("scroll", function (a) {
    if ($(this).scrollTop() > 50) {
      $(".main-header").css({ background: "#1d1d1d" });
      $(".caller-head").css({ display: "block" });
      $(".to-top").fadeIn(500);
      $(".clbtg").fadeIn(500);
      if ($(window).width() > 768) {
        $(".logo-holder").css({ height: "70px" });
        $(".logo-holder").css({ top: "5px" });
      }
    } else {
      if ($(window).width() <= 768) {
        $(".main-header").css({ background: "#1d1d1d" });
      } else {
        $(".main-header").css({ background: "transparent" });
        $(".logo-holder").css({ height: "100px" });
        $(".logo-holder").css({ top: "20px" });
        $(".caller-head").css({ display: "none" });
      }
      $(".to-top").fadeOut(500);
      $(".clbtg").fadeOut(500);
    }
  });
  //   scroll to------------------
  $(".custom-scroll-link").on("click", function () {
    var a = 90 + $(".scroll-nav-wrapper").height();
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") ||
      location.hostname === this.hostname
    ) {
      var b = $(this.hash);
      b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
      if (b.length) {
        $("html,body").animate(
          {
            scrollTop: b.offset().top - a,
          },
          {
            queue: false,
            duration: 1200,
            easing: "easeInOutExpo",
          }
        );
        return false;
      }
    }
  });

  // niceselect -----------------
  $(".url_btn").on("click", function (e) {
    e.preventDefault();
  });
  $(".chosen-select").niceSelect();
  // rangeslider -----------------
  $(".range-slider").ionRangeSlider({
    type: "double",
    keyboard: true,
  });
  $(".rate-range").ionRangeSlider({
    type: "single",
    hide_min_max: true,
  });
  $(".price-range").ionRangeSlider({
    type: "single",

    values: ["$", "$$", "$$$", "$$$$"],
  });
  //click -----------------
  $(".toggle-filter-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("tsb_act");
  });
  $(".clear-singleinput").on("click", function (e) {
    $(this).parents(".clact").find("input").val("");
  });
  $(".init-dsmen").on("click", function () {
    $(".user-profile-menu-wrap").slideToggle(400);
  });

  // Styles ------------------
  function csselem() {
    $(".height-emulator").css({
      height: $(".fixed-footer").outerHeight(true),
    });
    $(".slideshow-container .swiper-slide").css({
      height: $(".slideshow-container").outerHeight(true),
    });
    $(".slider-container .slider-item").css({
      height: $(".slider-container").outerHeight(true),
    });
    $(".map-container.column-map").css({
      height: $(window).outerHeight(true) - 80 + "px",
    });
    $(".hidden-search-column-container").css({
      height: $(window).outerHeight(true) - 70 + "px",
    });
  }
  csselem();
  // Mob Menu------------------
  $(".nav-button-wrap").on("click", function () {
    $(".main-menu").toggleClass("vismobmenu");
    $(this).toggleClass("vismobmenu_btn");
  });
  function mobMenuInit() {
    var ww = $(window).width();
    if (ww < 1064) {
      $(".menusb").remove();
      $(".main-menu").removeClass("nav-holder");
      $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
      $(".menusb").menu();
      $(".map-container.fw-map.big_map.hid-mob-map").css({
        height: $(window).outerHeight(true) - 110 + "px",
      });
    } else {
      $(".menusb").remove();
      $(".main-menu").addClass("nav-holder");
      $(".map-container.fw-map.big_map.hid-mob-map").css({
        height: 550 + "px",
      });
    }
  }
  mobMenuInit();
  //   css ------------------
  var $window = $(window);
  $window.on("resize", function () {
    csselem();
    mobMenuInit();
    if ($(window).width() > 1064) {
      $(".lws_mobile , .dasboard-menu-wrap").addClass("vishidelem");
      $(".map-container.fw-map.big_map.hid-mob-map").css({
        right: "0",
      });
      $(".map-container.column-map.hid-mob-map").css({
        right: "0",
      });
    } else {
      $(".lws_mobile , .dasboard-menu-wrap").removeClass("vishidelem");
      $(".map-container.fw-map.big_map.hid-mob-map").css({
        right: "-100%",
      });
      $(".map-container.column-map.hid-mob-map").css({
        right: "-100%",
      });
    }
  });
  $(".box-cat").on({
    mouseenter: function () {
      var a = $(this).data("bgscr");
      $(".bg-ser").css("background-image", "url(" + a + ")");
    },
  });
  $(".header-user-name").on("click", function () {
    $(".header-user-menu ul").toggleClass("hu-menu-vis");
    $(this).toggleClass("hu-menu-visdec");
  });
  // Counter ------------------
  if ($(".counter-widget").length > 0) {
    var countCurrent = $(".counter-widget").attr("data-countDate");
    $(".countdown").downCount({
      date: countCurrent,
      offset: 0,
    });
  }
  // open hours -----------------
  if ($(".opening-hours").length > 0) {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sun";
    weekday[1] = "mon";
    weekday[2] = "tue";
    weekday[3] = "wed";
    weekday[4] = "thu";
    weekday[5] = "fri";
    weekday[6] = "sat";
    document
      .getElementsByClassName(weekday[d.getDay()])[0]
      .classList.add("todaysDay");
  }

  // bubbles -----------------
  var bArray = [];
  var sArray = [2, 4, 6, 8];
  for (var i = 0; i < $(".bubbles").width(); i++) {
    bArray.push(i);
  }
  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
  if ($(".col-list-wrap").hasClass("novis_to-top")) {
    $(".to-top")
      .remove()
      .clone()
      .addClass("to-top_footer")
      .appendTo(".main-footer");
  }
  $(".to-top , .to-top_footer").on("click", function (a) {
    a.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
}
//   Parallax ------------------
function initparallax() {
  var a = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows()
      );
    },
  };
  trueMobile = a.any();
  if (null === trueMobile) {
    var b = new Scrollax();
    b.reload();
    b.init();
  }
  if (trueMobile)
    $(".bgvid , .background-vimeo , .background-youtube-wrapper ").remove();
}
// duplicate -----------------
$.fn.duplicate = function (a, b) {
  var c = [];
  for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
  return this.pushStack(c);
};
//   Star Raiting ------------------
function cardRaining() {
  var cr = $(".card-popup-raining");
  cr.each(function (cr) {
    var starcount = $(this).attr("data-starrating");
    $("<i class='fas fa-star'></i>").duplicate(starcount).prependTo(this);
  });
}
cardRaining();
function cardRaining2() {
  var cr2 = $(".card-popup-rainingvis"),
    sts = $(".price-level-item");
  cr2.each(function (cr) {
    var starcount2 = $(this).attr("data-starrating2");
    $("<i class='fas fa-star'></i>").duplicate(starcount2).prependTo(this);
  });
  sts.each(function (sts) {
    var pricecount = $(this).attr("data-pricerating");
    $("<strong>$</strong>").duplicate(pricecount).prependTo(this);
  });
  $("<div class='card-popup-rainingvis_bg'><div>").appendTo(
    ".card-popup-rainingvis"
  );
  $("<span class='card-popup-rainingvis_bg_item'></span>")
    .duplicate(5)
    .prependTo(".card-popup-rainingvis_bg");
}
cardRaining2();

//  autocomplete -----------------
function initAutocomplete() {
  var acInputs = document.getElementsByClassName("autocomplete-input");
  for (var i = 0; i < acInputs.length; i++) {
    var autocomplete = new google.maps.places.Autocomplete(acInputs[i]);
    autocomplete.inputId = acInputs[i].id;
  }
}
//  listing height -----------------
$(".dasboard-menu-btn").on("click", function () {
  $(".dasboard-menu-wrap").slideToggle(500);
});
$(".list-single-facts .inline-facts-wrap").matchHeight({});
$(".listing-item").matchHeight({});
$(".article-masonry").matchHeight({});
$(".grid-opt li span").on("click", function () {
  $(".listing-item").matchHeight({
    remove: true,
  });
  setTimeout(function () {
    $(".listing-item").matchHeight();
  }, 50);
  $(".grid-opt li span").removeClass("act-grid-opt");
  $(this).addClass("act-grid-opt");
  if ($(this).hasClass("two-col-grid")) {
    $(".listing-item").removeClass("has_one_column");
    $(".listing-item").addClass("has_two_column");
  } else if ($(this).hasClass("one-col-grid")) {
    $(".listing-item").addClass("has_one_column");
  } else {
    $(".listing-item")
      .removeClass("has_one_column")
      .removeClass("has_two_column");
  }
});
$(".notification-close").on("click", function () {
  $(this).parent(".notification").slideUp(500);
});
//   Init All ------------------
$(document).ready(function () {
  initTowhub();
  initparallax();
});
