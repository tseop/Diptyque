// Accordion menu faq
$(function (){

    var Accordion = $(".fold-box");

    Accordion.on("click", function (){
       var item = $(this);

       Accordion.find('.fold-content').stop().slideUp();

       if(item.parent().hasClass('expend')) {
           item.find('.fold-content').stop().slideUp();
           item.removeClass('expend');
       } else {
           item.find('.fold-content').stop().slideDown();
           Accordion.removeClass('expend');
           item.addClass('expend');
       }
    });
});