//
// ./api/v1/shows.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Show = require('../model/show.model');
//var Movie = require('../model/movie.model');
//var Room = require('../model/room.model');

//
// Geef een lijst van alle users.
//
routes.get('/shows', function (req, res) {
    res.contentType('application/json');

    Show.find({})
        .then(function (shows) {
            res.status(200).json(shows);
        })
        .catch((error) => {
        res.status(400).json(error);
});
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/shows/:id', function (req, res) {
    res.contentType('application/json');

    var showId = req.params.id;

    Show.findOne({ _id: showId})
        .then(function (show) {
            res.status(200).json(show);
        }).catch((error) => {
        res.status(400).json(error);
})
});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/shows', function (req, res) {
    res.contentType('application/json');

    var body = req.body;
    body.status = false;

    Show.create(body, function(err, show) {
        if (err) {
            res.status(400).json(error);
        } else {
            res.status(200).json(show);
        }
    })
});

//
// Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
//



routes.put('/shows/:id', function (req, res) {
    var showId = req.params.id;
    Show.findOneAndUpdate({
        _id: showId
    }, {$set: {
        time: req.body.time,
        movie: { name: body.movie.name,
                 genre: body.movie.genre,
                 duration: body.movie.duration,
                 imagePath: body.movie.imagePath},
        room:  { name: body.room.name,
                 seats: body.room.seats}         
    

    }}).then(function (show) {
        res.status(200). json(show);
    }).catch((error) => {
        res.status(400).json(error);
})
});


//
// Verwijder een bestaande user.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
//

routes.delete('/shows/:id', function (req, res) {
    var showId = req.params.id;

    Show.findOneAndRemove({ _id: showId})
        .then(function (show) {
            res.status(200).json({"response": "Successfully deleted"});
        }).catch((error) => {
        res.status(400).json(error);
})
});


module.exports = routes;