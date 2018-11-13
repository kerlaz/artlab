let state = {
    isFirstPage: true
};

$(document).ready(()=>{
    // code here
    $('.menu-icon').bind('click',function () {
        $(this).toggleClass('menu-open');
    });
    window.onscroll = ()=>{changeNav()};
    setInterval(()=>{$('#main-slider .item').toggleClass('on-top')},6000);
});
function changeNav() {
    if(window.pageYOffset > 100){
        $('.mobile-nav').removeClass('transparent')
    } else {
        $('.mobile-nav').addClass('transparent')
    }
}