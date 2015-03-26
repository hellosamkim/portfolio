$(document).ready(function(){
  // $('#site-wrapper').hide();
  // setTimeout("$('#site-wrapper').fadeIn(3000)", 5100);
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
  // $('#site-details').hide();
  // setTimeout("$('#site-details').fadeIn(1000)", 9000);
  $('#my-statements').typed({
    strings: ['I can play 5 Instruments?', 'I used to be a DJ?', 'I have a dog named Coco?', 'I can Beatbox?', 'I can speak fluent Korean?', "The first programming language I learnt was Pascal?", "A can of Diet Coke floats in water, but Regular Coca-Cola sinks? Try it!"],
    typeSpeed: 20,
    startDelay: 12000,
    backDelay: 5500
  }); 
  loadPage('abouts')
  loadPage('contact')
  loadPage('portfolio')
  $('#made').hide()

  function loadPage(page){
    $('#' + page).click(function(e){
      e.preventDefault();
      $('#my-info').load(page + ' #' + page, function(){
        $(this).hide().fadeIn('slow');
      });
    });
  };
});
