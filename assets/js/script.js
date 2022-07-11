// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';
var baAPI = "340f1157912d4ff6b27b91b2e968995f1c3a7802";
// var jpApiKeyFuel = 'f55357b73fmsha3fe6da1e79249ep1bc9bfjsnde4582e28e59' Joel's API Key
var aeAirAPI = "3a02828a79b9963";
var arrival = document.querySelector('#arrival')
var itinerary = document.querySelector('#itinerary')
var oneway = document.querySelector('#oneway')
var roundTrip = document.querySelector('#roundTrip')
var arrivalLocation = document.querySelector('#arrivallocation')
var dateDeparture = document.querySelector('#date_departure')
var locationDeparture = document.querySelector('#location_departure')
var numberOfPassengers = document.querySelector('#number_of_passengers')
var arrivallocation = document.querySelector('#arrivallocation')
var date_departure = document.querySelector('#date_departure')
var location_departure = document.querySelector('#location_departure')
var number_of_passengers = document.querySelector('#number_of_passengers')
var tripFuelCost=''
var milesPerGallon= document.querySelector('#miles-per-gallon')


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

// fetch('https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en', options)

// .then(function (response) {
//        return response.json();
//      })
//      .then(function (data) {
//        console.log(data);
//      });
//  for (var i=0; i<data.length; i++)
        // var milesToDrive = data[i].distance
        // var latitude = data[i].lat
        // var longitude = data[i].lng
        // console.log(milesToDrive);
        // console.log(latitude);
        // console.log(longitude);



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


var regFuelCost = function () {
    (regGrade * milesPerGallon) % milesToDrive;
    tripFuelCost=tripFuelCost[0];
  return (tripFuelCost);
};

var premiumGradeCost =function(){
  (premGrade * milesPerGallon)%milesToDrive;
  tripFuelCost=tripFuelCost[0];
  return (tripFuelCost);
};

var dieselFuelCost =function(){
  (dieselFuel * milesPerGallon)%milesToDrive
  tripFuelCost=tripFuelCost[0];
  return (tripFuelCost);
};

console.log(tripFuelCost);
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
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
// 		'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
// 	}
// };

// fetch(`https://priceline-com-provider.p.rapidapi.com/v1/flights/search?itinerary_type=ONE_WAY&class_type=ECO&location_arrival=NYC&date_departure=2022-11-15&location_departure=MOW&sort_order=PRICE&number_of_stops=1&price_max=20000&number_of_passengers=1&duration_max=2051&price_min=100&date_departure_return=2022-11-16, options)

//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

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

var apc=function(t,e){var n=this,o={},r="https://www.air-port-codes.com/api/v1/",c;return n={request:function(e){n[t](e)},init:function(){for(var t in e)"key"!==t&&"secret"!==t&&(o[t]=e[t])},autocomplete:function(t){o.term=t,n.doAjax()},multi:function(t){o.term=t,n.doAjax()},single:function(t){o.iata=t,n.doAjax()},countries:function(){n.doAjax()},states:function(){n.doAjax()},doAjax:function(){c.post(r+t,o,function(t){t=JSON.parse(t),t.status?n.onSuccess(t):n.onError(t)})}},c={x:function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],e,n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(t){}return e},send:function(t,n,o,r,i){void 0===i&&(i=!0);var a=c.x();a.open(o,t,i),a.onreadystatechange=function(){4===a.readyState&&n(a.responseText)},"POST"===o&&(a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.setRequestHeader("APC-Auth",e.key),e.secret&&a.setRequestHeader("APC-Auth-Secret",e.secret)),a.send(r)},post:function(t,e,n,o){var r=[];for(var i in e)r.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));c.send(t,n,"POST",r.join("&"),o)}},n.init(),n};

$(function () {
  $(".autocomplete").each(function () {
    var apca = new apc("autocomplete", {
      key: 'd2d92aca5c',
      secret : '242ad6062b5991e', // Your API Secret Key: use this if you are not connecting from a web server
      limit: 7,
    });

    var dataObj = {
      source: function (request, response) {
        // make the request
        apca.request(request.term);

        // this builds each line of the autocomplete
        itemObj = function (airport, isChild) {
          var label;
          if (isChild) {
            // format children labels
            label = "&rdsh;" + airport.iata + " - " + airport.name;
          } else {
            // format labels
            label = airport.city;
            if (airport.state.abbr) {
              label += ", " + airport.state.abbr;
            }
            label += ", " + airport.country.name;
            label += " (" + airport.iata + " - " + airport.name + ")";
          }
          return {
            label: label,
            value: airport.iata + " - " + airport.name,
            code: airport.iata,
          };
        };

        // this deals with the successful response data
        apca.onSuccess = function (data) {
          var listAry = [],
            thisAirport;
            console.log(data)
          if (data.status) {
            // success
            for (var i = 0, len = data.airports.length; i < len; i++) {
              thisAirport = data.airports[i];
              listAry.push(itemObj(thisAirport));
              if (thisAirport.children) {
                for (
                  var j = 0, jLen = thisAirport.children.length;
                  j < jLen;
                  j++
                ) {
                  listAry.push(itemObj(thisAirport.children[j], true));
                }
              }
            }
            response(listAry);
          } else {
            // no results
            response();
          }
        };
        apca.onError = function (data) {
          response();
          console.log(data.message);
        };
      },
      select: function (event, ui) {
        locationDeparture = ui.item.code
        console.log(locationDeparture);
        arrivalLocation = ui.item.code
        console.log(arrivalLocation)
      },
    };

    // this is necessary to allow html entities to display properly in the jqueryUI labels
    $(this).autocomplete(dataObj).data("ui-autocomplete")._renderItem =
      function (ul, item) {
        return $("<li></li>")
          .data("item.autocomplete", item)
          .html(item.label)
          .appendTo(ul);
      };
  });
});

// var flightEl = 



// fuelTypeReg.addEventListener("click", fuelType);
// fuelTypePrem.addEventListener("click", fuelType);
// fuelTypeDiesel.addEventListener("click", fuelType);
// roundTrip.addEventListener("click", roundTripCost);


// // Targets HTML Element for Gas Results Section
// var gasResultEl = document.getElementsByClassName('gas-results-section');

// // Creates Title Element & buttons for the Gas Results Section
// var gasResultsTitleEl = document.createElement('h2');
// var regFuelButton = document.createElement('button');
// var premiumGradeButton = document.createElement('button');
// var dieselFuelButton = document.createElement ('button');
// var totalCostEl = document.createElement('section');

// // Text in Title and buttons
// gasResultsTitleEl.textContent = 'Cost to Drive';
// regFuelButton.textContent = 'Regular Fuel';
// premiumGradeButton.textContent = 'Premium Grade Fuel';
// dieselFuelButton.textContent = 'Diesel Fuel';
// // totalCostEl.textContent = 'Total Cost: ' + tripFuelCost;

// // Append new elements to page
// gasResultEl.appendChild(gasResultsTitleEl);
// gasResultEl.appendChild(regFuelButton);
// gasResultEl.appendChild(premiumGradeButton);
// gasResultEl.appendChild(dieselFuelButton);
// gasResultEl.appendChild(totalCostEl);
// Targets HTML Element for Gas Results Section
var gasResultEl = document.getElementsByClassName('gas-results-section');

// Creates Title Element & buttons for the Gas Results Section
var gasResultsTitleEl = document.createElement('h2');
var regFuelButton = document.createElement('button');
var premiumGradeButton = document.createElement('button');
var dieselFuelButton = document.createElement ('button');
var totalCostEl = document.createElement('section');

// Text in Title and buttons
gasResultsTitleEl.textContent = 'Cost to Drive';
regFuelButton.textContent = 'Regular Fuel';
premiumGradeButton.textContent = 'Premium Grade Fuel';
dieselFuelButton.textContent = 'Diesel Fuel';
totalCostEl.textContent = 'Total Cost: ' + tripFuelCost;

// Append new elements to page
gasResultEl.appendChild(gasResultsTitleEl);
gasResultEl.appendChild(regFuelButton);
gasResultEl.appendChild(premiumGradeButton);
gasResultEl.appendChild(dieselFuelButton);
gasResultEl.appendChild(totalCostEl);

regFuelButton.addEventListener('click', regFuelCost);
premiumGradeButton.addEventListener('click', premiumGradeCost);
dieselFuelButton.addEventListener('click', dieselFuelCost);

