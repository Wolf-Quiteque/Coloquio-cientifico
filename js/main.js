!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e("#preloader-active").delay(450).fadeOut("slow"),
      e("body").delay(450).css({
        overflow: "visible",
      });
  }),
    e(window).on("scroll", function () {
      e(window).scrollTop() < 400
        ? (e(".header-sticky").removeClass("sticky-bar"),
          e("#back-top").fadeOut(500))
        : (e(".header-sticky").addClass("sticky-bar"),
          e("#back-top").fadeIn(500));
    }),
    e("#back-top a").on("click", function () {
      return (
        e("body,html").animate(
          {
            scrollTop: 0,
          },
          800
        ),
        !1
      );
    });
  var t = e("ul#navigation");
  t.length &&
    t.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: "+",
      openedSymbol: "-",
    }),
    (function () {
      var t = e(".slider-active");

      function s(t) {
        t.each(function () {
          var t = e(this),
            s = t.data("delay"),
            i = "animated " + t.data("animation");
          t.css({
            "animation-delay": s,
            "-webkit-animation-delay": s,
          }),
            t
              .addClass(i)
              .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                  t.removeClass(i);
                }
              );
        });
      }
      t.on("init", function (t, i) {
        s(e(".single-slider:first-child").find("[data-animation]"));
      }),
        t.on("beforeChange", function (t, i, o, l) {
          s(
            e('.single-slider[data-slick-index="' + l + '"]').find(
              "[data-animation]"
            )
          );
        }),
        t.slick({
          autoplay: !1,
          autoplaySpeed: 4e3,
          dots: !1,
          fade: !0,
          arrows: !1,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
              },
            },
          ],
        });
    })(),
    e(".items-active").slick({
      dots: !1,
      infinite: !0,
      autoplay: !0,
      speed: 400,
      arrows: !0,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
      ],
    }),
    e(".latest-items-active").slick({
      dots: !1,
      infinite: !0,
      autoplay: !0,
      speed: 400,
      arrows: !0,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
      ],
    }),
    e(".customer-active").slick({
      dots: !1,
      infinite: !0,
      autoplay: !0,
      speed: 400,
      arrows: !1,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
      ],
    }),
    e(".team-active").slick({
      dots: !1,
      infinite: !0,
      autoplay: !0,
      speed: 400,
      arrows: !0,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
          },
        },
      ],
    }),
    e(".brand-active").slick({
      dots: !1,
      infinite: !0,
      autoplay: !0,
      speed: 400,
      arrows: !1,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            dots: !1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  var s,
    i = e("select");
  i.length && i.niceSelect(),
    e("[data-background]").each(function () {
      e(this).css(
        "background-image",
        "url(" + e(this).attr("data-background") + ")"
      );
    }),
    new WOW().init(),
    e("#mc_embed_signup").find("form").ajaxChimp(),
    (s = e(".single_gallery_part, .img-pop-up")).length &&
      s.magnificPopup({
        type: "image",
        gallery: {
          enabled: !0,
        },
      }),
    0 != e("#contact-map").length &&
      google.maps.event.addDomListener(window, "load", function () {
        var e = {
            zoom: 11,
            scrollwheel: !1,
            center: new google.maps.LatLng(40.67, -73.94),
            styles: [
              {
                featureType: "all",
                elementType: "all",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    saturation: 36,
                  },
                  {
                    color: "#000000",
                  },
                  {
                    lightness: 40,
                  },
                ],
              },
              {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#000000",
                  },
                  {
                    lightness: 16,
                  },
                ],
              },
              {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#000000",
                  },
                  {
                    lightness: 17,
                  },
                  {
                    weight: 1.2,
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#868686",
                  },
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "administrative.country",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#d2d2d2",
                  },
                ],
              },
              {
                featureType: "administrative.province",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#676767",
                  },
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#848484",
                  },
                ],
              },
              {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#000000",
                  },
                  {
                    lightness: 20,
                  },
                ],
              },
              {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#212121",
                  },
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#212121",
                  },
                ],
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#212121",
                  },
                ],
              },
              {
                featureType: "landscape.natural.landcover",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#212121",
                  },
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "landscape.natural.terrain",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#212121",
                  },
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                  {
                    lightness: 21,
                  },
                  {
                    color: "#212121",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#181818",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "simplified",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "simplified",
                  },
                  {
                    color: "#3c3c3c",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    lightness: 29,
                  },
                  {
                    weight: 0.2,
                  },
                ],
              },
              {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#4e4e4e",
                  },
                  {
                    visibility: "simplified",
                  },
                  {
                    lightness: "-20",
                  },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "simplified",
                  },
                  {
                    color: "#373737",
                  },
                ],
              },
              {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                ],
              },
              {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [
                  {
                    lightness: 16,
                  },
                  {
                    color: "#313131",
                  },
                  {
                    visibility: "simplified",
                  },
                ],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#212121",
                  },
                  {
                    lightness: 19,
                  },
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#000000",
                  },
                  {
                    visibility: "on",
                  },
                ],
              },
            ],
          },
          t = document.getElementById("contact-map"),
          s = new google.maps.Map(t, e);
        new google.maps.Marker({
          position: new google.maps.LatLng(40.67, -73.94),
          map: s,
          title: "Cryptox",
        });
      }),
    (s = e(".popup-video")).length &&
      s.magnificPopup({
        type: "iframe",
      }),
    e(".counter").counterUp({
      delay: 10,
      time: 3e3,
    });
})(jQuery);
