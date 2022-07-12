// var heroEl = $(".hero");
// var mapEl = $("#map");
var andrewA = "AIzaSyCBrNRjKT6zvV08v1SM6-v-kbUtx-cYo8g";
var destinationInput = document.getElementById('going-to');
var originInput = document.getElementById('leaving');
// var aeMap = $("#ae-map");


// function addMap() {
//   aeMap.append(
//     `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
//   );
// }

function initialize() {

    new google.maps.places.Autocomplete(destinationInput);
    new google.maps.places.Autocomplete(originInput);
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
  


