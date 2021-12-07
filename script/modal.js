$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length ==0) {
        $(this).fadeOut();
        $('.additional-modal').removeClass('active');
    }
})
$('.modal-close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut();
    $('.additional-modal').removeClass('active');
})
$('.start-btn').on('click', function(){
    $('.modal-overlay').fadeIn()
})