function initMap() {
  var center = { lat: -34.397, lng: 150.644 }; //這裡的經緯度是示範用，您可以更改成您想顯示的位置
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: center,
  });
}
