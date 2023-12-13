// Accordion menu faq
function setAccordion() {
    var AccordionBtn = $(".fold-box .btn-fold");

    AccordionBtn.on("click", function (){
        var item = $(this);

        if(item.parent().find('.fold-box-content').hasClass('open')) {
            item.parent().find('.fold-box-content').removeClass('open');
        } else {
            AccordionBtn.parent().find('.fold-box-content').removeClass('open');
            item.parent().find('.fold-box-content').addClass('open');
        }  
    });

    //비밀글 적용
    if(AccordionBtn.parent().hasClass('secret')){
        AccordionBtn.parent().find('.fold-box-content').remove();            
    }
}

// image expand
function setImageExpand(){
    var btnImage = $(".review-img-area .img-list .img-file button")
   
    btnImage.on("click", function(){
        var image = $(this);
        image.parents('.img-list').toggleClass('expanded')
   });
}

//tab-fixed
function setfixedScr(){
    var scrollOffset = $('.prod-detail-cont .tab-wrap').offset();

    $(window).scroll(function() {
        if ($(document).scrollTop() > scrollOffset.top) {
            $('.prod-detail-cont .tab-wrap').addClass('fixed');
        }
        else {
            $('.prod-detail-cont .tab-wrap').removeClass('fixed');
        }
    });
}

$(document).ready(function(){
    setAccordion();
    setImageExpand();
    setfixedScr();
});  