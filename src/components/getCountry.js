import React, { Component } from 'react';
import getLocation from './getLocation';
var express = require('express');


var app = express();
var api = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
function getCountry() {
    var urlString = api + getLocation();
    var temp = app.get(urlString, function(req,res,next) {
        req.sys.country;
        res.json();
    });
    return country;
}


export default getCountry