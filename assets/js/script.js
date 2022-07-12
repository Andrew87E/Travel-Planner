// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';
var baAPI = "340f1157912d4ff6b27b91b2e968995f1c3a7802";
// var jpApiKeyFuel = 'f55357b73fmsha3fe6da1e79249ep1bc9bfjsnde4582e28e59' Joel's API Key

// total rewrite
// road trip planner
// integrate with google maps
// integrate with spotify to make new road trip playlist || same length as road trip
// integrate with weather to check road conditions
// road conditions api?? {icebox}
// api to check specs of car
// gas stations along route? icebox?
// ical google cal for road trip
// progress bar for calculations

var aeAirAPI = "3a02828a79b9963";
var arrivalLocation = $("#arrival").val();
var arrivalDate = $("#arrival-date").val();
var departureDate = $("#departure-date").val();
var departureLocation = $("#departure").val();
var numberOfPass = $("#num-pass").val();
var tripFuelCost = "";
var milesPerGallon = $("#miles-per-gallon").val();
var gasResultEl = $("gas-results-section");
var milesToDrive = "";
var itinerary = $("#itinerary").val();
var classType = $("#select-class").val();
var flightEl = $(".userInput");
var initalEl = $(".login-box");
var costToDriveEl = $(".results");
var initSubmit = $("#init-submit");
var driveCheck = $("#drive-check");

/* section for spotify api 
https://engineering.atspotify.com/2015/03/understanding-spotify-web-api/
https://developer.spotify.com/console/browse/
https://www.youtube.com/watch?v=c5sWvP9h3s8
https://developer.spotify.com/documentation/
https://developer.spotify.com/documentation/web-api/quick-start/
https://developer.spotify.com/documentation/web-api/reference/
*/

/* section for weather api







*/

//   Display fuel prices for user input
// take input from form for mpg
// var milesPerGallon = document.querySelector("user-input-form");
// take miles distance from Google API
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
// 		'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
// 	}
// };

// const options = {

// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f55357b73fmsha3fe6da1e79249ep1bc9bfjsnde4582e28e59',
// 		'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
// 	}
// };

// fetch(`https://distanceto.p.rapidapi.com/get?route=%5B%7B%22t%22%20%3A%20%22${location_departure}%22%7D%2C%20%7B%22t%22%20%3A%20%22${arrival}%22%7D%5D&car=true`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//  for (var i=0; i<data.length; i++)
//   var milesToDrive = data[i].steps.distance.car.distance
//   console.log(milesToDrive);

//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f55357b73fmsha3fe6da1e79249ep1bc9bfjsnde4582e28e59",
//     "X-RapidAPI-Host": "distanceto.p.rapidapi.com",
//   },
// };

// fetch(
//   `https://distanceto.p.rapidapi.com/get?route=%5B%7B%22t%22%20%3A%20%22${departureLocation}%22%7D%2C%20%7B%22t%22%20%3A%20%22${arrivalLocation}%22%7D%5D&car=true`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
//   for (var i = 0; i < data.length; i++)
//   var milesToDrive = data[i].steps.distance.car.distance;
// console.log(milesToDrive);

// take price per gallon from fuel API
// this function should allow user to select the type of fuel they are going to use and then calculate the prices using the form input for miles
// per gallon from user form as well as miles to drive from google api
// API call to gas for national average price data
// const gasOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b',
//     'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
//   }
// };

// fetch('https://gas-price.p.rapidapi.com/stateUsaPrice?state=national', gasOptions)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//  for (var i=0; i<data.length; i++);
// console.log(data[i].gasoline);
// console.log(data[i].premium);
// console.log(data[i].diesel);
//     var regGrade=data[i].gasoline;
//     var premGrade=data[i].premium;
//     var dieselFuel=data[i].diesel;
// });

// function regFuelCost() {
//   (regGrade * milesPerGallon) % (milesToDrive % 5280);
//   tripFuelCost = tripFuelCost[0];
//   return tripFuelCost;
// }

// var premiumGradeCost = function () {
//   (premGrade * milesPerGallon) % (milesToDrive % 5280);
//   tripFuelCost = tripFuelCost[0];
//   return tripFuelCost;
// };

// var dieselFuelCost = function () {
//   (dieselFuel * milesPerGallon) % (milesToDrive % 5280);
//   tripFuelCost = tripFuelCost[0];
//   return tripFuelCost;
// };

// console.log(tripFuelCost);
//   show results for different fuel types; reg, mid, premium, diesel

// mulitiply price per gallon against mpg from user

// milesToDrive*(user select for fuel grade)
// multiply above result by miles traveled
// user input for round trip or one way
// after user selects round trip runs below function to dounle fuel cost
// var roundTripCost = function () {
//   tripFuelCost * 2;
// };

// This is a test for pushing thru.
// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';

// Api call to priceline for data sorting

// API call to gas for national average price data
// const gasOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b',
//     'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
//   }
// };

// fetch('https://gas-price.p.rapidapi.com/stateUsaPrice?state=national', gasOptions)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//   });

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
// 		'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
// 	}
// };

// fetch('https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en', options)

// .then(function (response) {
//        return response.json();
//      })
//      .then(function (data) {
//        console.log(data);
//      });

// navbar burger menu
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

var regularFuel = $("#reg-fuel");
var premiumFuel = $("#prem-fuel");
var dieselFuel = $("#diesel-fuel");
var defaultPremiumCost = 4.95;
var defaultRegularCost = 4.45;
var defaultDieselCost = 5.06;
var defaultMpg = 20;
var mpg = $("#miles-per-gallon");

initSubmit.on("click", function (e) {
  e.preventDefault();
  init();
  generateFuelCost();
  console.log('mpg: ', mpg);
});

var hero = $(".hero");

function generateFuelCost() {
  hero.append(
    '<div class="ae-transparent gas-cost">' + "<h1>" + "Gas Cost" + "</h1>" + "</div>"
  );
  var gasInfo = $(".gas-info");
  if (regularFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Regular Fuel Cost: " +
        "$" +
        // regFuelCost +
        "</h2>" +
        "</div>"
    );
  } else if (premiumFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Premium Fuel Cost: " +
        "$" +
        // premFuelCost +
        "</h2>" +
        "</div>"
    );
  } else if (dieselFuel.prop("checked")) {
    gasInfo.append(
      '<div class="gas-cost">' +
        "<h2>" +
        "Diesel Fuel Cost: " +
        "$" +
        // dieselFuelCost +
        "</h2>" +
        "</div>"
    );
  }
}

// function to hide
function init() {
  initalEl.hide();
}

// create spotify playlist
var requestToken = 'BQBLfFMi3KcwXOUFIWvqxWh7Khsn17Hv8XBTMnw6_QK'
var createPlaylist = `https://api.spotify.com/v1/users/${userId}/playlists`
function createList (playlistname , public);
response = request.post(
  createPlaylist,
  headers = {
    'Authorization': 'Bearer', requestToken },
    json={
     'name': 'name',
      'public' : 'public',
  }
);

function putPlaylist (){
var playlist = createList( 
  playlistname ='My Road Trip Playlist',
  public =  false
)
};
