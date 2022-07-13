var heroEl = $(".ae-hero");
var mapEl = $("#map");
var andrewA = "AIzaSyCBrNRjKT6zvV08v1SM6-v-kbUtx-cYo8g";
var destinationInput = document.getElementById("going-to");
var originInput = document.getElementById("leaving");
var aeMap = $("#ae-map");
var submitBtn = $("#init-submit");
var fuelTypeEl = $("#fuel-type");
var defaultPremiumCost = 4.95;
var defaultRegularCost = 4.45;
var defaultDieselCost = 5.06;
var mpg = $("#miles-per-gallon");
var fuelArr = [];
var regfuelCost = 0;
var premFuelCost = 0;
var dieselFuelCost = 0;
var formEl = $(".login-box");

var directions;
var distance;
var duration;
var steps;
var stepsArray;
// var destLatitude;
// var destLongitude;
// var weatherApiKey = "76dea1d2eaa53c39fea214a799bab840";
// var weatherApiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${destLatitude}&lon=${destLongitude}&exclude={part}&appid=${weatherApiKey}`;

function init() {
  initalEl.hide();
}

$(document).keypress(function (event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});

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
    })
    .then(function (data) {
      console.log(data);
      var directions = data.routes[0].legs[0];
      //   destLatitude = data.routes[0].legs[0].end_location[0].lat;
      //   destLongitude = data.routes[0].legs[0].end_location[0].lng;
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
    });
  // .catch(function (err) {
  //   console.log(err);
  // });
});
// }

var mpg = $("#miles-per-gallon");

submitBtn.on("click", function (e) {
  e.preventDefault();
  formEl.hide();
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
      generateFuelCost(distance, milesPerGallon);
    });
  // .catch(function (err) {
  //   console.log(err);
  // });

  function generateFuelCost() {
    if (fuelType === "premium-fuel") {
      generateFuelCostCard();
      premFuelCost = (distance / milesPerGallon) * defaultPremiumCost;
      console.log(premFuelCost);
      gasCardEl.append(
        '<div class="gas-cost">' +
          "<h2>" +
          "Premium Fuel Cost: " +
          "$" +
          premFuelCost +
          "</h2>" +
          "</div>"
      );
    } else if (fuelType === "regular-fuel") {
      generateFuelCostCard();
      regFuelCost = (distance / milesPerGallon) * defaultRegularCost;
      console.log(regFuelCost);
      gasCardEl.append(
        '<div class="gas-cost">' +
          "<h2>" +
          "Regular Fuel Cost: " +
          "$" +
          regFuelCost +
          "</h2>" +
          "</div>"
      );
    } else if (fuelType === "diesel-fuel") {
      generateFuelCostCard();
      dieselFuelCost = (distance / milesPerGallon) * defaultDieselCost;
      console.log(dieselFuelCost);
      gasCardEl.append(
        '<div class="gas-cost">' +
          "<h2>" +
          "Diesel Fuel Cost: " +
          "$" +
          dieselFuelCost +
          "</h2>" +
          "</div>"
      );
    }
  }
});
var gasCardEl;
function generateFuelCostCard() {
  heroEl.append(
    '<div class="ae-transparent gas-card">' +
      "<h1>" +
      "Gas Cost" +
      "</h1>" +
      "</div>"
  );
  gasCardEl = $(".gas-card");
}

function initialize() {
  new google.maps.places.Autocomplete(destinationInput);
  new google.maps.places.Autocomplete(originInput);
}

google.maps.event.addDomListener(window, "load", initialize);

// var weatherSearch = function () {
//   fetch(weatherApiCall).then(
//     function (response) {
//       return response.json();
//     }.then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var currentWeather = data[i];
//         document.getElementById("#weather-forecast").innerHTML = currentWeather;
//       }
//     })
//   );
// };

// // document.getElementById('#init-submit').addEventListener('click', weatherSearch);
// var el = document.getElementById("#init-submit");
// if (el) {
//   el.addEventListener("click", swapper, false);
// }
// // function addMap() {
// //   aeMap.append(
// //     `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
// //   );
// // }
