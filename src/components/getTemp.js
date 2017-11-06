import React, { Component } from 'react';
import getLocation from './getLocation';
const express = require('express');
const { json } = require('body-parser');


// const axios = require('axios');

var app = express();
app.use(json());


var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
var api = "/api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
function getTemp() {
    var urlString = url + getLocation();
    var ctemp = app.get(urlString, function(req,res,next) {
        req.main.temp;
        res.json();
    });
    var temp = (ctemp * 1.8) + 32;
    return temp
}


export default getTemp