$(document).ready(()=>{
    // code here
    $('.menu-icon').bind('click',function () {
        $(this).toggleClass('menu-open');
        $(this).parent().toggleClass('nav-open');
        if($('.mobile-nav').hasClass('transparent')){
            $('.mobile-nav').removeClass('transparent');
        }
    });
    changeNav();
    window.onscroll = ()=>{changeNav()};
    setInterval(()=>{$('#main-slider .item').toggleClass('on-top')},6000);
    $('.form-group>input, .form-group>textarea').on('change paste keyup',function () {
        if($(this).val().length > 0){
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    })
});
function changeNav() {
    if(window.pageYOffset > 10){
        $('.mobile-nav').removeClass('transparent')
    } else {
        $('.mobile-nav').addClass('transparent')
    }
}