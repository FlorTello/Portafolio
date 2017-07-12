   $(".button-collapse").sideNav();

    $(document).ready(function(){
       $('.scrollspy').scrollSpy();

       $('.scroll').on('click', function(e) {
           e.preventDefault();
           $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
       });

     });
