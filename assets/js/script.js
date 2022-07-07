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
var milesPerGallon= document.querySelector('user input from form');
// take miles distance from Google API
var milesToDrive= fetch();
// take price per gallon from fuel API
var pricePerGallon = function(event){
   event.target.getAttribute('fuel-type');
};
//   show results for different fuel types; reg, mid, premium, diesel

// mulitiply price per gallon against mpg from user
var tripFuelCost= (pricePerGallon*milesToDrive)*milesPerGallon

    // milesToDrive*(user select for fuel grade)
// multiply above result by miles traveled
// user input for round trip or one way
tripFuelCost*(function(event){
    event.target.getAttribute('round trip or one way')
});