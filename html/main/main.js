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
    function setCollectionProdListSwiper (){
        var swiperCollectionProdList = new Swiper('.swiper-prod-wrap.swiper-collection-prod-list .swiper-container', {
            slidesPerView: '2',
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-prod-wrap.swiper-collection-prod-list .swiper-button-next",
                prevEl: ".swiper-prod-wrap.swiper-collection-prod-list .swiper-button-prev",
            },
            loop:false,
            allowTouchMove: false,
            observer: true,	// 추가
            observeParents: true,
        });
    }

    setCollectionProdListSwiper();
});