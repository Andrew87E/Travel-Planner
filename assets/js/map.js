const heroEl = $(".ae-hero");
const mapEl = $("#map");
const andrewA = "AIzaSyCBrNRjKT6zvV08v1SM6-v-kbUtx-cYo8g";
const destinationInput = document.getElementById("going-to");
const originInput = document.getElementById("leaving");
const aeMap = $("#ae-map");
const submitBtn = $("#init-submit");
const fuelTypeEl = $("#fuel-type");
const defaultPremiumCost = 4.95;
const defaultRegularCost = 4.45;
const defaultDieselCost = 5.06;
const mpg = $("#miles-per-gallon");
const fuelArr = [];
const regfuelCost = 0;
const premFuelCost = 0;
const dieselFuelCost = 0;
const formEl = $(".login-box");
let directions;
let distance;
let duration;
let steps;
let stepsArray;
const spotEl = $(".ae-spot");
spotEl.hide();

$(document).keypress(function (event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});

submitBtn.on("click", function (e) {
  e.preventDefault();
  spotEl.show();
  const destination = destinationInput.value;
  const origin = originInput.value;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${andrewA}`;
  console.log(url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const directions = data.routes[0].legs[0];
      //   destLatitude = data.routes[0].legs[0].end_location[0].lat;
      //   destLongitude = data.routes[0].legs[0].end_location[0].lng;
      const distance = directions.distance.text;
      const duration = directions.duration.text;
      const steps = directions.steps;
      const stepsArray = [];
      for (const i = 0; i < steps.length; i++) {
        stepsArray.push(steps[i].html_instructions);
      }
      console.log(stepsArray);
      const stepsString = stepsArray.join("<br>");
      console.log(stepsString);
      const directionsEl = $(".directions");
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
});

submitBtn.on("click", function (e) {
  e.preventDefault();
  formEl.hide();
  const fuelType = fuelTypeEl.val();
  if (fuelType === "null") {
    window.alert("Please select a fuel type");
  } else {
    const milesPerGallon = mpg.val();
    console.log(milesPerGallon);
  }
  console.log(fuelType);
  const destination = destinationInput.value;
  const origin = originInput.value;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${andrewA}`;
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
      const stepsString = stepsArray.join("<br>");
      console.log(stepsString);
      generateFuelCost(distance, milesPerGallon);
      //   generateSpotify();
    });

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
let gasCardEl;
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
