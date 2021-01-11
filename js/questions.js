
$(document).ready(function() {
    
    $(".questions__global > .questions__item > .questions__visible").click(function() {
        $(" .questions__invisibly ", $(this).parent()).slideToggle("normal");
        return false;
    });
    $(".questions__global .questions__invisibly ").hide();   

    $( ".questions__visible" ).on( "click", ".imgArrow" , function() {
        $( this ).toggleClass( "imgArrow_active" );
      });
      $('[data-modal=registration]').on('click', function() {
        $('.overlay, #registration').fadeIn()
     });
     $('[data-modal=next]').on('click', function() {
        $('.overlay, #next').fadeIn()
     });
     $('[data-modal=thank]').on('click', function() {
        $('.overlay, #thank').fadeIn()
     });
     $('[data-modal=restorePassword]').on('click', function() {
        $('.overlay, #restorePassword').fadeIn()
        $('#next').fadeOut()
     });
     $('[data-modal=registration]').on('click', function() {
        $('.overlay, #registration').fadeIn()
        $('#next').fadeOut()
     });
     $('[data-modal=next]').on('click', function() {
        $('.overlay, #next').fadeIn()
        $('#registration').fadeOut()
     });
    $('.modall__close').on('click', function() {
    $('.overlay, #registration, #next, #thank, #restorePassword, #NewPassword').fadeOut()
    });
});


