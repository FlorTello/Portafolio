//Loader
$(document).on("load",function(e){
  console.log(e);
  alert("pageload event fired!");
  function complete() {
    $( ".pre-load" ).removeClass( ".pre-load");
  }
  $(".pre-load").fadeOut( 1600, complete );
});
$(document).ready(function(){
  $( ".pre-load" ).removeClass( ".pre-load");

  $(".button-collapse").sideNav();
   $('ul.tabs').tabs(
   {
     swipeable: false,
     responsiveThreshold: Infinity, // breakpoint for swipeable
   });
   $('.scrollspy').scrollSpy();

   $('.scroll').on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
   });
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   setInterval(function() {
      $('.carousel').carousel('next');
    }, 3000);

    $('.about__col').on('focus',(e) => {
      Materialize.showStaggeredList('.titulo')
    });

 });
