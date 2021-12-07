
$('.features-summary').on('click', function(){
    $(this).parent('.features-items').toggleClass('active');
    $(this).next('.features-detail').slideToggle(500);
})
$('.hiring-summary').on('click', function(){
    $(this).parent('.hiring-items').toggleClass('active');
    $(this).next('.hiring-detail').slideToggle(500);
})

$(window).scroll(function(){
     if($(this).scrollTop() > 500) {
        $('#up').fadeIn();
     } else {
        $('#up').fadeOut();
     }
})
$('#up').on('click', function(){
    $('html, body').animate({scrollTop:0}, 800)
})

let navHeight = - $('.header-sticky').outerHeight(true)
$('#home').on('click', function(e){
    e.preventDefault();
    $('.bar-checkbox').prop('checked', false);
    $('html, body').animate({scrollTop: navHeight + $('#about').offset().top}, 800)
})

