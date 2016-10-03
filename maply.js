$(function () {
 
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -28, lng: 137}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
      'https://storage.googleapis.com/mapsdevsite/json/google.json');
}

function eqfeed_callback(response) {
  map.data.addGeoJson(response);
}


//   var weatherAtLocation = function (lat, log) {
//     var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBn7kAW5YxaUR2GPcgaQedUMMODW4gcjgA";
//     $.ajax(location, { datatype: "json" }).done(function (data) {
//       console.log(data);
//       var latitude = data.results[0].geometry.location.lat;
//       var longitude = data.results[0].geometry.location.lng;
//       var city = data.results[0].address_components[1].long_name;
//       var state = data.results[0].address_components[2].long_name;
    
//       $(".location").html(city+' '+ state);
//       console.log(data);


//       weatherAtLocation(latitude, longitude);
//     });
//   }
//   function initMap() {
//   var myLatLng = {lat: 37.8145, lng: -82.8071};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }


















// map.data.addListener('mouseover', function(event) {
//   document.getElementById('info-box').textContent =
//       event.feature.getProperty('letter');
// });

// var getLocation = function ("addMarker") {
//     var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyDKzN8r7xFk2C1OIa8FaXDIwz6QaB5SwmQ";
//     $.ajax(location, { datatype: "json" }).done(function (data) {
//       console.log(data);
//       var latitude = data.results[0].geometry.location.lat;
//       var longitude = data.results[0].geometry.location.lng;
//       var city = data.results[0].address_components[1].long_name;
//       var state = data.results[0].address_components[2].long_name;