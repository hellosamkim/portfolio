$(document).ready(function(){
  if ($('body').is('.main')) {
    intro();
    $('.intro-skip').hide();
    $('#skip-button').hide();
    introSkip();  
    $('#my-info').load('abouts');

    function intro(){
      $('#site-wrapper').hide();
      setTimeout("$('#site-wrapper').fadeIn(1500)", 5100);
      $('#first-phrase').typed({
        strings: ['Hi There!', 'You can call me Sam.', 'Sam Kim'],
        typeSpeed: 4,
        backDelay: 1000
      });
      $('#second-phrase').typed({
        strings: ['Full Stack Web Developer'],
        typeSpeed: 10,
        startDelay: 6000,
        backDelay: 1000
      });
      $('#third-phrase').typed({
        strings: ['Based in Toronto, ON'],
        typeSpeed: 10,
        startDelay: 7500,
        backDelay: 1000
      });
      $('#site-details').hide();
      setTimeout("$('#site-details').fadeIn(1000)", 9000);
      
      startMyStatements(12000); 
      loadPage('abouts');
      loadPage('portfolio');
      loadPagePreview('abouts');
      loadPagePreview('portfolio');
      $('#abouts').addClass('animated infinite pulse');
      $('#contact').addClass('animated infinite pulse');
      $('#portfolio').addClass('animated infinite pulse');
    };

    function introSkip(){
      setTimeout("$('#skip-button').fadeIn('fast')", 500);
      $('#skip-button').addClass('animated flash');
      $('#skip-button').click(function(){
        $('.intro').fadeOut('fast');
        $('#skip-button').addClass('animated bounceOutDown');
        $('.intro-skip').fadeIn(1500);
        $('#site-wrapper').fadeIn('1500');
        $('#site-details').fadeIn(1500);
        startMyStatements(2000);
      });
      setTimeout("$('#skip-button').addClass('animated bounceOutDown')", 6000);
    };

    function startMyStatements(startDelay){
      $('#my-statements').typed({
        strings: ['I can play 5 Instruments?', 'I used to be a DJ?', 'I have a dog named Coco?', 'I can Beatbox?', 'I can speak fluent Korean?', "The first programming language I ever learnt was Pascal?", "A can of Diet Coke floats in water, but regular Coca-Cola sinks? Try it!"],
        typeSpeed: 20,
        startDelay: startDelay,
        backDelay: 5500
      });
    };

    function loadPage(page){
      $('#' + page).click(function(e){
        e.preventDefault();
        $('#selection-overlay').fadeOut('fast');
        $('#my-info').load(page, function(){
          $(this).hide().fadeIn('slow');
        });
      });

    };

    function loadPagePreview(page){
      var phrase = "";
      if (page === "abouts") {
        phrase = "About Me"
      } else if (page === "contact") {
        phrase = "Contact Me"
      } else {
        phrase = "My Portfolio"
      }
      $('#' + page).hover(
        function(){
          $('#selection-overlay').text(phrase).fadeIn('fast');
        }, function() {
          $('#selection-overlay').fadeOut('fast');
        }
      );
    };
  }
});


