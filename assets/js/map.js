var heroEl = $(".hero");
var mapEl = $("#map");
var andrewA = "";
var aeMap = $("#ae-map");

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