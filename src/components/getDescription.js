import React, { Component } from 'react';
import getLocation from './getLocation';
const express = require('express');
// const axios = require('axios');


var app = express();
var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
var api = "api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
function getDescription() {
    var urlString = url + getLocation();
    var temp = app.get(urlString, function(req,res,next) {
        req.weather[0].description;
        res.json();
    });
    return description;
}


export default getDescription