const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

// => /flights

// GET /flights/ => See all the flights

router.get('/', flightCtlr.index); 

// GET /flights/new => renders the flight form to the client so a flight can then be created

router.get('/new', flightCtlr.new);

// POST /flights => take form data (data payload) and then have mongoose/mongoDB create a document

router.post('/', flightCtlr.create);

// GET /flights/:id => navigate to the show page of one particular flight and all of it's properties

router.get('/:id', flightCtlr.show);

module.exports = router;