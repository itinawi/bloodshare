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
  
  function add_disease(group,name){
    var box;
    box = document.getElementById("template-form").firstChild.cloneNode(true);
    $(box).find('.disease_label').html(name);
    $(group).append(box);
  }
  add_disease('#group1','Hepatitis B');
  add_disease('#group2','Hepatitis C');
  $("#group2").append('<br>');  
  add_disease('#group2','Cancer');
  function add_timegrid_cell(day_index, hour){
    day_strings = ['S','M','T','W','R','F','S'];
    return '<th classid=' + day_strings[day_index] + String(hour) + ' class="timegrid-vline" style="width: 30.4286px;"></th>';
  }

  function add_timegrid_row(hour){
    var row = '<tr id = "grid_hour-' + String(hour) + '"class="timegrid-hline" style="height: 15.9286px;">';
    for (var day_index = 0; day_index < 7;day_index ++){
      row +=add_timegrid_cell(day_index, hour);
    }
    row += '</tr>';
    var labelTop = 15.9286 * hour;
    console.log(labelTop);
    console.log(String(labelTop));
    var hour_tag = "am";
    if(hour > 12){
      hour_tag = "pm";
    }
    hour_string = String(hour % 12);
    if(hour % 12 == 0){
      hour_string = String(12);
    }
    hour_string = String(hour);
    $('#timegrid-ylabels-id').append('<div class="timegrid-label" style="height: 15.9286px; top: ' + String(labelTop) + 'px;">' + hour_string  + '</div>');
    $('#grid_hour-' + String(hour - 1)).after(row);
  }
  for(var hour = 0; hour < 24; hour++){
    add_timegrid_row(hour);
  }

  
});
