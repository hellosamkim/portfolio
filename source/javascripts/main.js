(function() {
  $(function() {
    $('#site-wrapper').hide();
    setTimeout("$('#site-wrapper').fadeIn(3000)", 5100);
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
    return $('#my-statements').typed({
      strings: ['I used to be a DJ?', 'I have a dog named Coco?', 'I can Beatbox?', 'I can speak fluent Korean?', 'I can play 5 Instruments?', "I love bacon?", "It's impossible to talk while inhaling through your nose? Try it!"],
      typeSpeed: 20,
      startDelay: 12000,
      backDelay: 3500
    }, 
    $('#abouts').addClass('animated infinite pulse'), $('#contact').addClass('animated infinite pulse'), $('#portfolio').addClass('animated infinite pulse'), $('#resume').addClass('animated infinite pulse'));  
  });
}).call(this);
