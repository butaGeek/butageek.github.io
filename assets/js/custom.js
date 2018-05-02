$(function() {
  $('[data-toggle="popover"]').popover();

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass("navbar-fixed-top");
    } else {
      $('.navbar').removeClass("navbar-fixed-top");
    }

    if ($('#about').length) {
      var aboutTop = $('#about').offset().top;

      if ($(this).scrollTop() > aboutTop) {
        $('#up').addClass('visible');
      } else {
        $('#up').removeClass('visible');
      }
    }
  })

  // $('#about .anime').addClass('wow animated fadeInUp');
  $('#profession .anime').addClass('wow animated fadeInUp');
  $('#experience .event').addClass('wow animated fadeInUp');
  $('#project .thumbnail').addClass('wow animated fadeInUp');
  // $('#playground .demo .anime').addClass('wow animated zoomIn');
  // $('#playground .dev .anime').addClass('wow animated fadeIn');
  // $('#contact li').addClass('wow animated rotateIn');

  wow = new WOW({
    offset: 150
  });
  wow.init();
});
