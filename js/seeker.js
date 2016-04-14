$(document).ready(function() {

$('#slider1').slider({
    value:1,
    min: 1,
    max: 10,
    step: 1,
    slide: function( event, ui ) {
      $('#emergency_level').text(ui.value);
    }
  });

$('#slider2').slider({
    value:1,
    min: 1,
    max: 10,
    step: 1,
    slide: function( event, ui ) {
      $('#donor_proximity').text(ui.value + 'km');
    }
  });

$(document).ready(function() {

  $('.submit').click(function(e){
    window.location.replace("http://www.mit.edu/~uayyaz/bloodshare/GR4/results.html");
  })

});

});