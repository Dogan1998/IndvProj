//
// ./api/v1/recipe.routes.v1.js
//
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Room = require('../model/room.model');

//
// Geef een lijst van alle users.
//
routes.get('/rooms', function (req, res) {
    res.contentType('application/json');

    Room.find({})
        .then(function (rooms) {
            res.status(200).json(rooms);
        })
        .catch((error) => {
        res.status(400).json(error);
});
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/rooms/:id', function (req, res) {
    res.contentType('application/json');

    var roomId = req.params.id;

    Room.findOne({ _id: roomId})
        .then(function (room) {
            res.status(200).json(room);
        }).catch((error) => {
        res.status(400).json(error);
})
});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/rooms', function (req, res) {
    res.contentType('application/json');

    var body = req.body;
    body.status = false;

    Room.create(body, function(err, room) {
        if (err) {
            res.status(400).json(error);
        } else {
            res.status(200).json(room);
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



routes.put('/rooms/:id', function (req, res) {
    var roomId = req.params.id;
    Room.findOneAndUpdate({
        _id: roomId
    }, {$set: {
        
                 name: req.body.name,
                 seats: req.body.seats
    

    }}).then(function (room) {
        res.status(200). json(room);
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

routes.delete('/rooms/:id', function (req, res) {
    var roomId = req.params.id;

    Room.findOneAndRemove({ _id: roomId})
        .then(function (room) {
            res.status(200).json({"response": "Successfully deleted"});
        }).catch((error) => {
        res.status(400).json(error);
})
});


module.exports = routes;