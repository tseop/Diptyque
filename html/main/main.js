$(document).ready(function(){
    //main-banner-swiper
    var swiperMainBanner = new Swiper('.main-banner-wrap .swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoWidth: true,
        navigation: {
            nextEl: ".main-banner-wrap .swiper-button-wrap .swiper-button-next",
            prevEl: ".main-banner-wrap .swiper-button-wrap .swiper-button-prev",
        },
        loop:true,
        allowTouchMove: false,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction : false,
        },
        speed: 1000,
    });

    //collection-prod-list-swiper
    function setCollectionProdListSwiper() {
        if ($('.swiper-collection-prod-list').length > 0) {
            $('.swiper-collection-prod-list').each(function () {
                var controlSwiperEl = $(this);
                controlSwiperEl.addClass('is-active');
                if ($('.swiper-slide', controlSwiperEl).length > 2) {
                    var controlSwiper = new Swiper(controlSwiperEl.find('.swiper-container').get(0), {
                        init: false,
                        slidesPerView: '2',
                        spaceBetween: 20,
                        speed: 250,
                        navigation: {
                            nextEl: $('.swiper-button-next', controlSwiperEl)[0],
                            prevEl: $('.swiper-button-prev', controlSwiperEl)[0]
                        },
                        resistance: '100%',
                        resistanceRatio: 0,
                        updateOnWindowResize: true,
                        observer: true,
                        observeParents: true
                    });
                } else {
                    controlSwiperEl.removeClass('is-active');
                }
                controlSwiper.init();
            });
        }
    }

    setCollectionProdListSwiper();
});