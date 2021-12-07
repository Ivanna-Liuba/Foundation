$('.innovative-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    easing: 'ease-in-out',

});

$('.footer-title__opener').on('click', function(){
    $(this).toggleClass('active');
})