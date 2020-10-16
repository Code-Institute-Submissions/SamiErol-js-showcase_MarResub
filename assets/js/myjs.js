//initiate map variables
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

//function to toggle dark Mode
function darkMode() {
  var identifier = document.body;
  identifier.classList.toggle("darkmodecls");
}


//validate contact form
function valContact(){
var name=document.forms["fcontact"]["name"].value;
var message=document.forms["fcontact"]["message"].value;

  //if name empty
  if (name==null || name==""){
    alert("Name can not be empty");
    return false;
  }
  //if message too short
  else if(message.length<20){
    alert("Message must be at least 20 characters in length");
    return false;
  }
  //success message
  else{
      alert("Thank you for getting in touch!");
  }
}
