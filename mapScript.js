/*
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAoCj1RshX5cjFNqDRrspLRFuFFTF9ZcRg&callback=initMap';
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
*/

let map;
let service;
let infowindow;

var eventNameList;
var daysList;
var timeList;
var addressList;

var contentString;

function getElements() {
  console.log("i am here");
  eventNameList = document.getElementsByClassName("event");
  daysList = document.getElementsByClassName("day");
  timeList = document.getElementsByClassName("time");
  addressList = document.getElementsByClassName("addr");
  /*
  for (i=0; i < addressList.length; i++){
    console.log(timeList[i].textContent);
}
  const marker = new google.maps.Marker({
    position: { lat: 44.9727, lng: -93.23540000000003 },
    map: map,
  });*/

  var request;
  

  for (i=0; i < addressList.length; i++){
    if (addressList[i].textContent != "Zoom Meeting"){

      request = {
        query: addressList[i].textContent,
        fields: ["name", "geometry"],
      };

      service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
          map.setCenter(results[0].geometry.location);
        }
      });
    }
  }
  //console.log(days[0].textContent);

  //var myNodeList = document.querySelectorAll("td");
  //console.log(myNodeList[0]);
}


function initMap() {

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.9727, lng: -93.23540000000003 },
    zoom: 14,
  });

  service = new google.maps.places.PlacesService(map);

  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  
}

j = 0;
function createMarker(place) {
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  const image = "pineapple.jpg";
  
  contentString = '<div style="color: black">' 
        + eventNameList[j].textContent + "<br>"
        + daysList[j].textContent + " | " + timeList[j].textContent + "<br>"
        + addressList[j].textContent
        + '</div>';
  j++;
  //infowindow = new google.maps.InfoWindow({
    //content: contentString,
  //});

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    icon: image,
  });

  console.log("Create Marker: " + contentString);
  marker.addListener("click", () => {
    (new google.maps.InfoWindow({
      content: contentString,
    })).open(map, marker);
  });
}


window.onload = function() {
  console.log("hi claire");
  getElements();

}