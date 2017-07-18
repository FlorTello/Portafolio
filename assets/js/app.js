//Loader
// $(document).on("preloader",function(e){
//   console.log(e);
//   setTimeout(function(){
// 		$("#pre-load").addClass("pre-load")
// 	},2000);
//   // alert("pageload event fired!");
//   // function complete() {
//   //   $( ".pre-load" ).removeClass( ".pre-load");
//   // }
//   // $(".pre-load").fadeOut( 1600, complete );
// });
$(document).ready(function() {
  setTimeout(function(){
    $("#pre-load").fadeOut("slow");
	},2000);
});
var lastScrollTop = 0;
$(window).scroll((e) =>{
  // var scrollTop = $(this).scrollTop();
  var scrollTop= window.pageYOffset || document.body.scrollTop;
  console.log(scrollTop);
  if (scrollTop <= lastScrollTop) {
    $('nav').fadeIn("slow");
  } else {
    $('nav').fadeOut("slow");
 }
  lastScrollTop = scrollTop;
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
