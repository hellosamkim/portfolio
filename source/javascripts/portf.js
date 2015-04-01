$(document).ready(function(){
  openProj('proj-1')
  openProj('proj-2')
  openProj('proj-3')
  openProj('proj-4')
});

function openProj(proj) {
  $(document).on('click', '#' + proj, function(){
    $('.' + proj).addClass(pickIntro());
    $('#main-wrap').css({
      'transition': 'all 0.2s ease-in',
      '-webkit-transition': 'all 0.2s ease-in',
      '-moz-transition': 'all 0.2s ease-in',
      '-webkit-filter': 'grayscale(40%) blur(5px)',
      '-moz-filter': 'grayscale(40%) blur(5px)',
      'opacity': '0.3',
      'filter': 'grayscale(40%) blur(5px)'
    });
  });
  $('.' + proj).on('click', '.close', function(){
    $('.' + proj).attr('class', proj);
    $('#main-wrap').css({
      '-webkit-filter': 'grayscale(0%) blur(0px)',
      '-moz-filter': 'grayscale(0%) blur(0px)',
      'opacity': '1',
      'filter': 'grayscale(0%) blur(0px)'
    });
  });
};

function pickIntro() {
  var items = ['slideInUp', 'slideInDown', 'zoomIn', 'rollIn', 'lightSpeedIn', 'rotateIn', 'bounceInRight', 'fadeInUpBig', 'rollInDownLeft', 'fadeInLeft', 'slideInRight'];
  return 'animated ' + items[Math.floor(Math.random()*items.length)];
};