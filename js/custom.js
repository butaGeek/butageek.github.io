$(function() {
  $('[data-toggle="popover"]').popover();

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

  $('#about .anime').addClass('wow animated fadeInUp');
  $('#profession .anime').addClass('wow animated fadeInUp');
  $('#experience .event').addClass('wow animated fadeInUp');
  $('#project .thumbnail').addClass('wow animated fadeInUp');
  $('#playground .demo .anime').addClass('wow animated zoomIn');
  $('#playground .dev .anime').addClass('wow animated fadeInUp');
  $('#contact li').addClass('wow animated rotateIn');

  wow = new WOW({
    offset: 200
  });
  wow.init();
});
