const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight
};


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    // We need to render the new.ejs view to the client
    res.render('flights/new');
}