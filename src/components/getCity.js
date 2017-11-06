import React, { Component } from 'react';
import getLocation from './getLocation';
const express = require('express');
// const axios = require('axios');


var app = express();
var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
var api = "/api.openweathermap.org/data/2.5/forecast?id=524901&APPID=62c585309442241f836aee04f6f3118d";
function getCity() {
    var urlString = url + getLocation();
    var temp = app.get(urlString, function(req,res,next) {
        req.name;
        res.json();
    });
    return city;
}


export default getCity