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

});