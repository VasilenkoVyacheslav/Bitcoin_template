window.$ = window.jQuery = require('jquery');
// Swiper Home
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination ]);
import marquee from 'jquery.marquee';

// Search
$(document).ready(function (){
    let search = document.querySelector(".search")
    let btn = document.querySelector(".search-button")
    let input = document.querySelector(".input")

    btn.addEventListener('click',()=>{
        search.classList.toggle('active');
        input.focus()
    });

    const swiper = new Swiper('.home__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: 'true',
        navigation: {
            nextEl: '.home__swiper-button-next',
            prevEl: '.home__swiper-button-prev',
        },
    });

    //Mobile menu
    $('.menu-icon').on('click', function() {
        $('.menu').addClass('active');
    })
    $('.cancel-icon').on('click', function() {
        $('.menu').removeClass('active');
    });

    // Marquee
    const marqueeInitialization = () => {
        $('.tabs__marquee').marquee({
            duration: 8000,
            pauseOnHover: true,
            gap: 30
        });
    };

    // Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
        $('.tabs__marquee').marquee('destroy');
        marqueeInitialization();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();

    marqueeInitialization();

    $('.video__play').on('click', function (){
        const videoPlayer = $('#video');
        $(this).toggleClass('paused');
        const video = videoPlayer.get(0);
        if (video.paused)
            video.play();
        else
            video.pause();
    })

})
