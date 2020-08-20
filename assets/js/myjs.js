//function to initiate and populate map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: 53.3498,
      lng: -6.2603
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    {lat: 53.342686, lng: -6.267118},
    {lat: 51.903614, lng: -8.468399},
    {lat: 54.607868, lng: -5.926437}
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
