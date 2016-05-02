$(document).ready(function() {
  /*
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
  */
  function add_disease(group,name){
    var box;
    box = document.getElementById("template-form").firstChild.cloneNode(true);
    $(box).find('.disease_label').html(name);
    $(group).append(box);
  }
  add_disease('#group1','Hepatitis B');
  add_disease('#group2','Hepatitis C');
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
    var hour_tag = "am";
    if(hour >= 12){
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
  mousepressed = false;
  select_color = '#008080';
  $('.timegrid-vline').mousedown(function(){
      mousepressed = true;
      if($(this).attr('bgcolor') !=  select_color){
        $(this).attr('bgcolor', select_color);
      }else{
        $(this).attr('bgcolor', 'white');      
      }
  });
  console.log(city_names_array);
  $('#city_names').tokenfield({
    autocomplete: {
      source: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
      minLength: 2,
      delay: 100
    },
    showAutocompleteOnFocus: true
  })

  /*.autocomplete({
    source: city_names_array,
    minLength: 1, //User need to type at leaast 2 characters for autocomplete to start.
    select: function( event, ui ) {
      console.log('hi');
      //submit the selected answer
      $(this).val(ui.item.value);
      selected = true;
    },
    close: function( event, ui ) {
      console.log('ho')
      if(selected){
        //empty the text box and return focus to it.
        $('#user_input_id').val('');
        $('#user_input_id').focus();
        selected = false;
      }
    }
  });*/

  $('.timegrid-vline').mouseover(function(){
      if(mousepressed){
          if($(this).attr('bgcolor') !=  select_color){
              $(this).attr('bgcolor', select_color);
          }else{
              $(this).attr('bgcolor', 'white');
          }
      }
  });

  $('*').mouseup(function(){
      mousepressed = false;
  });

});
