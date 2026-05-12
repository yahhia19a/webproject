$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
const carousel = document.querySelector('#categoryCarousel');

new bootstrap.Carousel(carousel, {
  interval: 6000,
  ride: 'carousel',
  pause: false,
  wrap: true
});