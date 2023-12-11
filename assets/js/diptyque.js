// header-search
function setSearch (){
    var btnSearchOpen = $('.header-top .unb-wrap .btn-search'),
        btnSearchClose = $('.header-search-wrap .btn-close'),
        searchWrap = $('.header-search-wrap')

    btnSearchOpen.on("click", function(){
        searchWrap.addClass("open");
    });
    btnSearchClose.on("click", function(){
        searchWrap.removeClass("open");
    });
};

//prod-detail-img-swiper
function setProdDetailSwiper (){
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
    });
}

//prod-list-swiper
function setProdListSwiper (){
    var swiperProdList = new Swiper('.swiper-prod-wrap.swiper-prod-list .swiper-container', {
        slidesPerView: '4',
        // slidesPerGroup: '4',
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-prod-wrap.swiper-prod-list .swiper-button-next",
            prevEl: ".swiper-prod-wrap.swiper-prod-list .swiper-button-prev",
        },
        loop:false,
        allowTouchMove: false,
        observer: true,	// 추가
  observeParents: true,
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

//tabs
function setTabs (){
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

// input 상태변경
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
}

$(document).ready(function(){
    // 옵션 클릭 이벤트
    $(document).on('click', '.select-box .btn-select', function() {
	    if($(this).closest('.select-box').hasClass('open')) {
		    $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
	    } else {
		    $(this).parent().siblings('.select-box').removeClass('open').find('.option-list').slideUp(200);
		    $(this).closest('.select-box').addClass('open').find('.option-list').slideDown(200);
	    }
    });
    $(document).on('click', '.select-box .btn-option', function() {
        var bindText = $(this).html();
        $(this).closest('.select-box').find('.btn-select').html(bindText);
        $(this).closest('.select-box').removeClass('open').find('.option-list').slideUp(200);
    });

    // TOP 버튼 이벤트
    $(window).scroll(function(){
        if( $(this).scrollTop() > 100 ){
          $(".floating-wrapper").addClass("on");
        }
        else{
          $(".floating-wrapper").removeClass("on");
        }
    });

    $(document).on('click', '.btn-go-top', function(){
        $('html, body').animate({
          scrollTop: 0
        }, 300)
    });

    setSearch();
    setInputStatus();
    setProdDetailSwiper();
    setProdListSwiper();
    setTooltip();
    setTabs();
});