const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

// GET /flights/ => "See all the flights"
// Routers map to a controller action

router.get('/', flightCtlr.index); 

module.exports = router;