// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';
var baAPI = '340f1157912d4ff6b27b91b2e968995f1c3a7802';
// var jpApiKeyFuel = 'f55357b73fmsha3fe6da1e79249ep1bc9bfjsnde4582e28e59' Joel's API Key 


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function burgerMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }  

//   Display fuel prices for user input
// take input from form for mpg 
var milesPerGallon= document.querySelector('user-input-form'); 
// take miles distance from Google API
var milesToDrive= fetch();
// take price per gallon from fuel API
// this function should allow user to select the type of fuel they are going to use and then calculate the prices using the form input for miles 
// per gallon from user form as well as miles to drive from google api
var fuelTypeReg = document.querySelector('fuel-reg-btn');
var fuelTypePrem= document.querySelector('fuel-prem-btn');
var fuelTypeDiesel= document.querySelector('fuel-diesel-btn');
var fuelType = function(event){
    if (fuelTypeReg){
        ('gasoline'*milesPerGallon)%milesToDrive
    } 
    else if (fuelTypePrem) { ('premium'*milesPerGallon)%milesPerGallon

    }
    else if (fuelTypeDiesel){
        ('diesel'*milesPerGallon)%milesPerGallon
    };
        

};


//   show results for different fuel types; reg, mid, premium, diesel

// mulitiply price per gallon against mpg from user

    // milesToDrive*(user select for fuel grade)
// multiply above result by miles traveled
// user input for round trip or one way
tripFuelCost*(function(event){
    event.target.getAttribute('round trip or one way')
});

// This is a test for pushing thru.
// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';

// Api call to priceline for data sorting
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
		'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
	}
};

fetch('https://priceline-com-provider.p.rapidapi.com/v1/flights/search?itinerary_type=ONE_WAY&class_type=ECO&location_arrival=NYC&date_departure=2022-11-15&location_departure=MOW&sort_order=PRICE&number_of_stops=1&price_max=20000&number_of_passengers=1&duration_max=2051&price_min=100&date_departure_return=2022-11-16', options)

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

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


fuelTypeReg.addEventListener('click', fuelType);
fuelTypePrem.addEventListener('click', fuelType);
fuelTypeDiesel.addEventListener('click', fuelType);