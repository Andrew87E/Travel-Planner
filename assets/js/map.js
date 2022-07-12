var heroEl = $(".hero");
var mapEl = $("#map");
var andrewA = "";
var aeMap = $("#ae-map");

function addMap() {
  aeMap.append(
    `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=${andrewA}&q=Space+Needle,Seattle+WA"></iframe>`
  );
}
