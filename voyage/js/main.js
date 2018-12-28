var  currentImageIndex = 0;
var images = ["images/slider-bg1.jpg", "images/slider-bg.jpg", "images/type-bg.jpg"];
var imageCount = 3;

function drawCurrentImage() {
    $('.header-slider').fadeOut(500, function () {
        $('.header-slider').css('background-image', 'url("' + images[currentImageIndex] + '")');
        $('.header-slider').fadeIn();
    })
}

function next() {
    if(currentImageIndex == imageCount - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }

    drawCurrentImage();
}
function previous() {
    if(!currentImageIndex) {
        currentImageIndex = imageCount - 1;
    } else {
        currentImageIndex--;
    }

    drawCurrentImage();
}

$(function () {
    drawCurrentImage();

    $('.next').click(function () {
        next();
    });
    $('.previous').click(function () {
        previous();
    })
});




$(function () {
    var owl = $('.owl-carousel-offers');
    owl.owlCarousel({
        center: 'true',
        items: 6,
        loop:true,
        autoplay: 'true',
        autoplayHoverPause: 'true',
        autoplayTimeout: 2000,
        margin: 300,
        responsive:{
           0:{
                items:2
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            700: {
               items:4
            },
            960:{
                items:4
            },
            1200:{
                items:5
            },

            1700: {
                items:6

            }

        }
    });

});



$(function () {
    var owl2 = $('.owl-carousel-clients');
    owl2.owlCarousel({
        center: 'true',
        loop:true,
        items: 4,
        margin: 200,
        autoplay: 'true',
        autoplayHoverPause: 'true',
        autoplayTimeout: 2000,
        responsive:{

            0: {
                items: 0
            },
            400:{
                items:1
            },
            1100: {
                items: 2
            },
            1300:{
                items:3,

            },
            1700:{
                items:4
            },

        }

    });

})

//scroll top

$(document).ready(function() {
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });


    //scroll menu
    var h1 = $("#h1").position();
    var h2 = $("#h2").position();
    var h3 = $("#h3").position();

    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: h1.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: h2.top
        }, 500);
        return false;

    }); // left menu link2 click() scroll END

    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: h3.top
        }, 500);
        return false;

    });
//menu

    $('.menu ul li a').click(function(event){

        var data = $(this).attr('data-destination-id');

        if ( data ) {
            event.preventDefault();

            $('html, body').stop().animate({
                scrollTop: $('#' + data).offset().top
            }, 'normal');

        }

    });





    //menu mobile
    $('.menu-mobile').click(function () {
        $('.menu-mobile').toggleClass("active");

        $('.menu').slideToggle()

    })

});


