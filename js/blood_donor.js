$(document).ready(function() {
  var map;
  var myMarker = null;
  initMap();
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.366665, lng: -71.1027149},
      zoom: 8
    });
  }
  map.addListener('click', function(event) {
    if(myMarker != null) {
      myMarker.setMap(null);
    }
    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });
    console.log(event.latLng);
    marker.setMap(map);
    myMarker = marker;
  });

});
