$(document).ready(function() {
  new Cocoen(document.querySelector('.cocoen'));

  var owl = $('.owl-carousel')

  owl.owlCarousel({
    item: 3,
    loop: true,
    margin: 18,
    startPosition: 0,
    slideTransition: 'ease-in-out',
    URLhashListener: true,
    center: true,
    nav: true,
    dots: true,
    responsive:{
      0:{
          items: 1.8,
      },
      576:{
          items: 3,
          margin: 32,
      }
    }
  })

  owl.owlCarousel();

  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  })

  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })

  // collapce
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().find('.collapce-arrow').toggleClass('collapce-animate')
    $(this).parent().find('.btn-link').toggleClass('text-grad')
  })
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent().find('.collapce-arrow').toggleClass('collapce-animate')
    $(this).parent().find('.btn-link').toggleClass('text-grad')
  })

  $( ".card-header" ).hover(function(){
    $(this).find('.btn-link').addClass('text-grad-1')
    $(this).find('.arrow-collapce').addClass('text-grad-collapce')
    }, function(){
    $(this).find('.btn-link').removeClass('text-grad-1')
    $(this).find('.arrow-collapce').removeClass('text-grad-collapce')
  });
})