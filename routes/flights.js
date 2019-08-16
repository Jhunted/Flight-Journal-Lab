const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

// => /flights

// GET /flights/ => "See all the flights"
// Routers map to a controller action

router.get('/', flightCtlr.index); 

// GET /flights/new => renders the flight form to the client so a flight can then be created

router.get('/new', flightCtlr.new);

module.exports = router;