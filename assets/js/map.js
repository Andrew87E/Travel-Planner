// var heroEl = $(".hero");
// var mapEl = $("#map");
var andrewA = "AIzaSyCBrNRjKT6zvV08v1SM6-v-kbUtx-cYo8g";
var destinationInput = document.getElementById('going-to');
var originInput = document.getElementById('leaving');
// var aeMap = $("#ae-map");
var submitBtn = $("#init-submit");
var mpg = $("#miles-per-gallon");
var regFuel;
var regularFuel = $("#reg-fuel");
var premiumFuel = $("#prem-fuel");
var dieselFuel = $("#diesel-fuel");
var defaultPremiumCost = 4.95;
var defaultRegularCost = 4.45;
var defaultDieselCost = 5.06;
var defaultMpg = 20;
var mpg = $("#miles-per-gallon");

function init() {
    initalEl.hide();
  }
// function addMap() {
//   aeMap.append(
//     `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
//   );
// }
submitBtn.on("click", function (e) {
    e.preventDefault();
    var destination = destinationInput.value;
    var origin = originInput.value;
    var url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${andrewA}`;
    console.log(url);
    fetch(url)
    .then(function (response) {
        return response.json();
        }
    )
    .then(function (data) {
        console.log(data);
        var directions = data.routes[0].legs[0];
        var distance = directions.distance.text;
        var duration = directions.duration.text;
        var steps = directions.steps;
        var stepsArray = [];
        for (var i = 0; i < steps.length; i++) {
            stepsArray.push(steps[i].html_instructions);
        }
        console.log(stepsArray);
        var stepsString = stepsArray.join("<br>");
        console.log(stepsString);
        var directionsEl = $(".directions");
        directionsEl.html(`<h2>Directions</h2>
        <p>${stepsString}</p>
        <p>Distance: ${distance}</p>
        <p>Duration: ${duration}</p>`);
        }
    )
    .catch(function (err) {
        console.log(err);
    }
    );
}
);
// }



function initialize() {

    new google.maps.places.Autocomplete(destinationInput);
    new google.maps.places.Autocomplete(originInput);
  }
  
  google.maps.event.addDomListener(window, 'load', initialize);
  


function addMap() {
  aeMap.append(
    `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
  );
}

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=${andrewA}',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

axios();
