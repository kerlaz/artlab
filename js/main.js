$(document).ready(()=>{
    // code here
    $('.menu-icon').bind('click',function () {
        $(this).toggleClass('menu-open');
    });
    changeNav();
    window.onscroll = ()=>{changeNav()};
    setInterval(()=>{$('#main-slider .item').toggleClass('on-top')},6000);
});
function changeNav() {
    if(window.pageYOffset > 10){
        $('.mobile-nav').removeClass('transparent')
    } else {
        $('.mobile-nav').addClass('transparent')
    }
}