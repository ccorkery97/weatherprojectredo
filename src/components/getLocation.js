import React, { Component } from 'react';



var lat = 0;
var lon = 0;
function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      return lat + '&' + lon;
    });
  } else {
    console.log("Geolocation is not supported.");
  }
}

export default getLocation