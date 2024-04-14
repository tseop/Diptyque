// btn-go-top
function setTop(){
    var btnTop = $(".floating-wrapper > .btn-go-top");

    btnTop.on("click",function(){
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ){
          $(".floating-wrapper").addClass("active");
        }
        else{
          $(".floating-wrapper").removeClass("active");
        }
    });
}

// popup open, close
function setPopup() {
    var target = document.querySelectorAll('.btn-popup');
    var btnPopClose = document.querySelectorAll('.popup-wrap .btn-close');
    var targetID;
    
    // 팝업 열기
    for(var i = 0; i < target.length; i++){
        target[i].addEventListener('click', function(){
            targetID = this.getAttribute('href');
            document.querySelector(targetID).style.display = 'block';
        });
    }

    // 팝업 닫기
    for(var j = 0; j < target.length; j++){
        btnPopClose[j].addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.style.display = 'none';
        });
    }
}

// breadcrumb
function setBreadCrumbLink() {
    var btnOpen = $(".breadcrumb-item.has-sub .breadcrumb-link");

    btnOpen.on("click",function(){
        $(this).parent().toggleClass("active");
    });
}

// mo 서브메뉴 링크 toggle
function setSubLink() {
    var btnOpen = $(".btn-sub-page");
    var btnSubList = $(".header-wrapper .header-middle .header-left .sub-list-box");

    btnOpen.on("click",function(){
        $(this).toggleClass("active");
        btnSubList.toggleClass("active");
    });
}

// 검색 영역
function setSearch(){
    var btnSearchOpen = $('.header-middle .user-menu-list .user-menu-item.search .user-menu-link'),
    btnSearchClose = $('.header-search .btn-close'),
    searchWrap = $('.header-search');

    btnSearchOpen.on("click", function(){
        searchWrap.css("display","block");
    });
    btnSearchClose.on("click", function(){
        searchWrap.css("display","none");
    });
};

// input 상태 변경 -- clear, has-value
function setInputStatus() {
    var $targetInput = $('.ip-header-search'),
        $_targetButton = $('.btn-ip-clear'),
        inputFlag = null;

    if ($targetInput.length > 0) {
        $targetInput.off('keyup mouseenter').on('keyup mouseenter', function (e) {
        inputFlag = e.type === 'mouseenter' ? true : e.type === 'mouseleave' ? false : null;
            if (e.type === 'keyup') {
                inputActive(this);
            }
        });
    }
    $_targetButton.on('click', function () {
        $(this).closest('.search-input-box').find('.ip-header-search').val('');
        $(this).closest('.search-input-box').removeClass('has-value');
    });
    $targetInput.each(function () {
        inputActive(this);
    });

}
function inputActive(tg) {
    if ($(tg).val().length > 0) {
      $(tg).closest('.search-input-box').addClass('has-value');
    } else {
      $(tg).closest('.search-input-box').removeClass('has-value');
    }
}

//swiper-prod-detail
function setProdDetailSwiper() {
    var swiperProdDetail = new Swiper('.swiper-prod-wrap.swiper-prod-detail .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: ".swiper-prod-wrap.swiper-prod-detail .swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
        navigation: {
            nextEl: ".swiper-prod-wrap.swiper-prod-detail .swiper-button-next",
            prevEl: ".swiper-prod-wrap.swiper-prod-detail .swiper-button-prev",
        },
        loop:true,
        allowTouchMove: false,
        breakpoints: {
            768: {
                allowTouchMove: true,
            },
        },
    });
}

//swiper-prod-list
function setProdListSwiper() {
    if ($('.swiper-prod-list').length > 0) {
        $('.swiper-prod-list').each(function () {
            var controlSwiperEl = $(this);
            controlSwiperEl.addClass('is-active');
            if ($('.swiper-slide', controlSwiperEl).length > 4) {
                var controlSwiper = new Swiper(controlSwiperEl.find('.swiper-container').get(0), {
                    init: false,
                    slidesPerView: '4',
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
                    observeParents: true,
                    allowTouchMove: false,

                    breakpoints: {
                        945: {
                            slidesPerView: '3',
                        },
                        768: {
                            slidesPerView: '2',
                            spaceBetween: 10,
                            allowTouchMove: true,
                        },
                    },
                });
            } else {
                controlSwiperEl.removeClass('is-active');
            }
            controlSwiper.init();
        });
    }
}

// tab
function setTabs() {
    var tabBtn = $('.tab-list-wrap .tab-list .tab-item .btn-tab'),  
        tabContent = $('.tab-wrap .tab-content');

    tabContent.hide().eq(0).show().css("display","block");

    tabBtn.click(function(){
        var target = $(this).parent();
        var index = target.index();
            tabBtn.parent().removeClass("active");
            target.addClass("active");
            tabContent.css("display","none");
            tabContent.eq(index).css("display","block");
    });
}

//tooltip
function setTooltip (){
    var btnOpenTooltip = $('.tooltip-wrap .btn-tooltip-open'),  
        btnCloseTooltip = $('.tooltip-wrap .tooltip-box .btn-tooltip-close'),
        tooltipWrap = $('.tooltip-wrap');

    btnOpenTooltip.on("click", function(){
        tooltipWrap.addClass("active");
    });
    btnCloseTooltip.on("click", function(){
        tooltipWrap.removeClass("active");
    });
}

// Accordion menu faq
function setAccordion() {
    
    //비밀글
    var secret = $(".fold-box.secret");
        secret.find('.fold-box-content').remove();

    //아코디언    
    var Accordion = $(".fold-box .btn-fold");

    Accordion.on("click", function (){
        var item = $(this);

        if(item.parent().find('.fold-box-content').hasClass('open')) {
            item.parent().find('.fold-box-content').removeClass('open');
        } else {
            Accordion.parent().find('.fold-box-content').removeClass('open');
            item.parent().find('.fold-box-content').addClass('open');
        }
    });

}

// image expand
function setImageExpand() {
    var btnImage = $(".review-img-area .img-list .img-file button")
   
    btnImage.on("click", function(){
        var image = $(this);
        image.parents('.img-list').toggleClass('expanded')
   });
}

// list-sort select, option
function setOption() {
    var btnSelect = $(".btn-select");
    var btnOption = $(".btn-option");

    btnSelect.on("click", function(){
        if($(this).closest('.select-box').hasClass('open')) {
		    $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
	    } else {
		    $(this).parent().siblings('.select-box').removeClass('open').find('.option-list').slideUp(200);
		    $(this).closest('.select-box').addClass('open').find('.option-list').slideDown(200);
	    }
    });
    btnOption.on("click", function(){
        var bindText = $(this).html();
        $(this).closest('.select-box').find('.btn-select').html(bindText);
        $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
    });
}


$(document).ready(function(){
    setTop();
    setPopup();
    setBreadCrumbLink();
    setSubLink();
    setSearch();
    setInputStatus();
    setProdDetailSwiper();
    setProdListSwiper();
    setTabs();
    setTooltip();
    setAccordion();
    setImageExpand();
    setOption();
});