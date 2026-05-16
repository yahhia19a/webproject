
console.log("JS Working");
console.log(typeof $.fn.owlCarousel);

$(document).ready(function () {
    $(".hero-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: true
    });

    $(".categories-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        nav: false,
        dots: false,

        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

    $(".products-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
$(document).ready(function () {
  var slider = $("#mainCarousel");

  slider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    smartSpeed: 1200,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
  });
});

function changeSlide(index) {
  $("#mainCarousel").trigger("to.owl.carousel", [index, 500]);
}

    $(".blog-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: false,
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


    $(".prod-actions span").click(function () {

        let icon = $(this).find("i");

        if (icon.hasClass("fa-heart")) {
            icon.toggleClass("fa-solid");
            icon.toggleClass("fa-regular");
        }

        if (icon.hasClass("fa-cart-shopping")) {
            alert("Product added to cart!");
        }

    });
    $(".search-tags span").click(function () {

        let text = $(this).text();

        $(".search-section input").val(text);

    });

    $(".arrivals-tab").click(function () {

        $(".arrivals-tab").css({
            color: "",
            borderBottom: "none"
        });

        $(this).css({
            color: "#e32e40",
            borderBottom: "2px solid #e32e40"
        });

    });

    let hours = 8;
    let minutes = 26;
    let seconds = 30;

    setInterval(function () {

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
        }

        $(".countdown-block").eq(0).text(
            String(hours).padStart(2, '0')
        );

        $(".countdown-block").eq(1).text(
            String(minutes).padStart(2, '0')
        );

        $(".countdown-block").eq(2).text(
            String(seconds).padStart(2, '0')
        );

    }, 1000);

});