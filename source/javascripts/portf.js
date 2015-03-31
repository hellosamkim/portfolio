$(document).ready(function(){
  $('.proj-1').hide();
  $('#proj-1').click(projDetails('#proj-1'));
});

function projDetails(project) {
  $(this).hide();
};