// This is a test for pushing thru.
// API Keys
// var baGasKey = '1071d15d6cmsh24a0edab985b59ap1dfd1fjsn894de03a6f8b';


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function burgerMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

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