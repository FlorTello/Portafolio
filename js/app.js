
    $(document).ready(function(){
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

     });
