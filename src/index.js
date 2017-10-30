import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var api = "https://fcc-weather-api.glitch.me/api/current?";
var tempUnit = 'F';
var TempInF;



$( document ).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = "lat=" + position.coords.latitude;
          var lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
      });
    }
})



function getWeather(lat, lon) {
    var urlWeather = api + lat + "&" + lon;
    $.ajax({
      url: urlWeather, success: function (result) {
        $("#city").text(result.name + ", ");
        $("#country").text(result.sys.country);
        TempInF = Math.round(result.main.temp * 1.8) + 32;
        $("#temp").text(TempInF);
        $("#tempunit").text(tempUnit);
      }
    });
  
}