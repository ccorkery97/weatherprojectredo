import React, { Component } from 'react';
import getLocation from './getLocation';
var express = require('express');

var app = express();
var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
var api = "/api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
function getTemp() {
    var urlString = url + getLocation();
    var ctemp = app.get(api, function(req,res,next) {
        req.main.temp;
        res.json();
    });
    var temp = (ctemp * 1.8) + 32;
    return temp
}


export default getTemp