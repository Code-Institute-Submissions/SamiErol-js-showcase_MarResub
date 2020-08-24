let map;
var latval = 0.00;
var lngval = 0.00;
var newloc = { lat: latval, lng: lngval };

//function to initiate and populate map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: 46.056946,
      lng: 16.363449
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    {lat: 53.342686, lng: -6.267118},
    {lat: 36.549362, lng: 31.996994}
  ]

  var markers = locations.map(function(location, i){
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
}
//move to location on map onclick
function moveMap(latval, lngval) {
  newloc = { lat: latval, lng: lngval };
  map.setCenter(newloc);
}

//function to show hide content in index
function showHide() {
  var x = document.getElementById("showhide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//function to toggle dark Mode
function darkMode() {
  var identifier = document.body;
  identifier.classList.toggle("darkmodecls");
}
