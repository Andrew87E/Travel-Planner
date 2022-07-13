var heroEl = $(".hero");
var mapEl = $("#map");
var andrewA = "AIzaSyCBrNRjKT6zvV08v1SM6-v-kbUtx-cYo8g";
var destinationInput = document.getElementById("going-to");
var originInput = document.getElementById("leaving");
var aeMap = $("#ae-map");
var submitBtn = $("#init-submit");
var mpg = $("#miles-per-gallon");
var fuelTypeEl = $("#fuel-type");
var defaultPremiumCost = 4.95;
var defaultRegularCost = 4.45;
var defaultDieselCost = 5.06;
var mpg = $("#miles-per-gallon");
var directions;
var distance;
var duration;
var steps;
var stepsArray;
var destLatitude;
var destLongitude;
var weatherApiKey = '76dea1d2eaa53c39fea214a799bab840'
var weatherApiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${destLatitude}&lon=${destLongitude}&exclude={part}&appid=${weatherApiKey}`


function init() {
  initalEl.hide();
}

// function splitFuelCost() {
//     var totalCostPer =
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
         destLatitude = data.routes[0].legs[0].end_location.lat;
         destLongitude = data.routes[0].legs[0].end_location.lng;
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



submitBtn.on("click", function (e) {
  e.preventDefault();
  var fuelType = fuelTypeEl.val();
  if (fuelType === "null") {
    window.alert("Please select a fuel type");
  } else {
    var milesPerGallon = mpg.val();
    console.log(milesPerGallon);
  }
  console.log(fuelType);
  var destination = destinationInput.value;
  var origin = originInput.value;
  var url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${andrewA}`;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      directions = data.routes[0].legs[0];
      distance = parseInt(directions.distance.text);
      duration = directions.duration.text;
      steps = directions.steps;
      stepsArray = [];
      for (let i = 0; i < steps.length; i++) {
        stepsArray.push(steps[i].html_instructions);
      }
      console.log(stepsArray);
      var stepsString = stepsArray.join("<br>");
      console.log(stepsString);
      generateFuelCost();
    });
  // .catch(function (err) {
  //   console.log(err);
  // });
  function generateFuelCost() {
    if (fuelType === "premium-fuel") {
      var premFuelCost = (distance / mpg) * defaultPremiumCost;
      console.log(premFuelCost);
    } else if (fuelType === "regular-fuel") {
      var regFuelCost = (distance / mpg) * defaultRegularCost;
      console.log(regFuelCost);
    } else if (fuelType === "diesel-fuel") {
      var dieselFuelCost = (distance / mpg) * defaultDieselCost;
      console.log(dieselFuelCost);
    }}
});

function initialize() {
  new google.maps.places.Autocomplete(destinationInput);
  new google.maps.places.Autocomplete(originInput);
}

google.maps.event.addDomListener(window, "load", initialize);


document.getElementById('#init-submit').addEventListener('click', weatherSearch());   
      function weatherSearch(){
      fetch(weatherApiCall)
      .then (function(response){
        console.log(response)
              return response.json()}
      .then (function(data){
       for (var i=0; i<data.length; i++){
       var currentWeather= data[i]
        document.getElementById('#weather-forecast').innerHTML = currentWeather
                         }
              })
          )};  



// function addMap() {
//   aeMap.append(
//     `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
//   );
// }
