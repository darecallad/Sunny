function initMap() {
  var center = { lat: 37.379112243652344, lng: -121.93821716308594 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: center,
  });
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Sunny Child Care",
  });
}
