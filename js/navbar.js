$(function() {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  var aboutTop = $('#about').offset().top;

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > aboutTop) {
      $('#up').addClass('visible');
    } else {
      $('#up').removeClass('visible');
    }
  })
});
