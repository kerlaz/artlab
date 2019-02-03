$(document).ready(()=>{
    // code here
    $('.menu-icon').bind('click',function () {
        $(this).toggleClass('menu-open');
        $(this).parent().toggleClass('nav-open');
        if($('.mobile-nav').hasClass('transparent')){
            $('.mobile-nav').removeClass('transparent');
        }
    });
    $('.persons .show-card').bind('click', function () {
        $('.page.hover-page').addClass('visible');
    });
    $('.portrait, .story').bind('click',function () {
        $('.page.hover-page').removeClass('visible');
    })
});