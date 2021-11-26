$(document).ready(function() {
    "use strict";

    $('.banner .banner-slide').slick({
        slideToScroll: 1,
        slideToShow: 1,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    });

    $('.testimonial .slider').slick({
        slideToScroll: 1,
        slideToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
    });

    $('.shipping select').niceSelect();

    $('.header .mobile-btn').on('click', function() {
        $('.header .account-btn').toggleClass('active');
    });

    let backToTopBtn = $('.back-to-top');
    $(window).on('scroll', function() {
        let scrollFromTop = $(this).scrollTop();
        if(scrollFromTop > 300) {
            backToTopBtn.addClass('active');
        } else {
            backToTopBtn.removeClass('active');
        }
    });
    backToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        });
    })

    $('.custom-btn-bg > span').on('click', function() {
        $('.custom-btn-bg .sub-menu').toggle();
    })


    $('.sign-in .input-item > i').on('click', function() {
        $(this).siblings('input').attr('type', function(e) {
            if($(this).attr('type') === 'password') {
                return 'text';
            } else {
                return 'password';
            }
        })

        $(this).toggleClass('fa-eye-slash fa-eye')
    })

    $('.sign-in .notification .close-btn').on('click', function() {
        $('.sign-in .notification').fadeOut();
    })

    $('.sign-in .show-notification').on('click', function() {
        $('.sign-in .notification').fadeIn();
    })

    $('.nice-select').niceSelect();

    if($('.otp-verify').length > 0)
    {
        $('.otp-verify input').on('focus', function() {
            $(this).addClass('red');
        })

        $('.otp-verify input').on('keyup', function() {
            if($(this).val() != '') {
                $(this).removeClass('red').addClass('green').blur().next().focus();
            }
        })
    }    

});