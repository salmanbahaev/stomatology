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

  
  
})