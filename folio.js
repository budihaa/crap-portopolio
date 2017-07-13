$(document).ready(function(){

  // Smooth Scroll
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }


});
// animate.css + Scroll
$(window).scroll(function(event) {

  var y = $(this).scrollTop();

    if (y >= 400) {

      $('h1').addClass('');
    }

});

})
