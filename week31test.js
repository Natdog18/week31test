$(function () {

 var getLocation = function (zipcode) {
    var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBn7kAW5YxaUR2GPcgaQedUMMODW4gcjgA";
    $.ajax(location, { datatype: "json" }).done(function (data) {
      console.log(data);
      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;
      var city = data.results[0].address_components[1].long_name;
      var state = data.results[0].address_components[2].long_name;




function initMap() {
  var myLatLng = {lat: -37.8267, lng: -122.4233,

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
 <script async defer
      src="Google Maps Geocoding API key:AIzaSyBwmMF81x2wlpYyC-1slptT_lkp4V-m8cY
https://maps.googleapis.com/maps/api/geocode/json?latlng=37.8267,-122.4233&key=eee9868d7b7f8afe9ae4b46c7900ef48
">
    </script>

