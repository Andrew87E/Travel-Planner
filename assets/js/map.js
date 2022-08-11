/*TO-DO
1 add map
2 weather
3 styling
4 pics
5 polish
6 add duration to gas card
*/

var heroEl = $(".ae-hero");
var mapEl = $("#map");
var andrewA = "";
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
var spotEl = $(".ae-spot");
spotEl.hide();

// var destLatitude;
// var destLongitude;
// var weatherApiKey = "";
// var weatherApiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${destLatitude}&lon=${destLongitude}&exclude={part}&appid=${weatherApiKey}`;

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
  spotEl.show();
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
      directionsEl.html(`
      <div class="ae-card">
      <header class="ae-card-header">
      <h3>Directions</h3>
	</header>
  <br>
  <div>
		<div>
        <p>${stepsString}</p>
        
         <p>Distance: ${distance}</p>
        
        <p>Duration: ${duration}</p>
       </div> 
        </div>
        </div>
      `);
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
      //   generateSpotify();
    });
  // .catch(function (err) {
  //   console.log(err);
  // });

  //   function generateSpotify() {
  //     heroEl.append(
  //       '<div class="container ae-transparent spotify-card">' +
  //         "<h1>" +
  //         "Generate a playlist with Spotify!" +
  //         "</h1>" +
  //         '<form action="">' +
  //         '<input type="hidden" id="hidden_token">' +
  //         '<div class="col-sm-6 form-group row mt-4 px-0">' +
  //         '<label for="Genre" class="form-label col-sm-2">Genre:</label>' +
  //         '<select name="" id="select_genre" class="form-control form-control-sm col-sm-10">' +
  //         "<option>Select...</option>" +
  //         "</select>" +
  //         "</div>" +
  //         '<div class="col-sm-6 form-group row px-0">' +
  //         '<label for="Genre" class="form-label col-sm-2">Playlists:</label>' +
  //         '<select name="" id="select_playlist" class="form-control form-control-sm col-sm-10">' +
  //         "<option>Select...</option>" +
  //         "</select>" +
  //         "</div>" +
  //         '<div class="col-sm-6 row form-group px-0">' +
  //         '<button type="submit" id="btn_submit" class="btn btn-success col-sm-12">Search</button>' +
  //         "</div>" +
  //         "</form>" +
  //         '<div class="row">' +
  //         '<div class="col-sm-6 px-0">' +
  //         '<div class="list-group song-list">' +
  //         "</div>" +
  //         "</div>" +
  //         '<div class="offset-md-1 col-sm-4" id="song-detail">' +
  //         "</div>" +
  //         "</div>" +
  //         "</div>" +
  //         "</div>"
  //     );
  //     spotifyCardEl = $(".spotify-card");

  //   }

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
