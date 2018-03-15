var express = require('express');
var router = express.Router();

var fashionRoute = require('../route/fashion_routes');
var elecRoute = require('../route/elec_routes');
var sportsRoute = require('../route/sports_routes');
var cartsRoute = require('../route/cart_routes');

module.exports = function(app){
	fashionRoute(app);
	elecRoute(app);
	sportsRoute(app);
	cartsRoute(app);
}