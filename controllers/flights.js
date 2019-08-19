const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {
            title: 'Flight Detail',
            flight
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new'); 
}

function create(req, res) {
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    Flight.create(req.body, function(err, flight) {
        console.log(flight);
        res.redirect('/flights');
    });
}

function addDestination(req, res) {
    // 1) Query the database for a single flight by id
    // 2) Create a destination
    // 3) Push the destination to the destinations array property on the flight
    // 4) Save the Flight record/doc
    // 5) call res.redirect /flights/:id
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err, flight) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}