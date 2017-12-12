var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Show = require('../model/show.model');
 var neo4j = require('neo4j-driver').v1;
 var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
 var session = driver.session();


//neo4j

routes.get('/ratings', function(req, res) {
      res.contentType('application/json');
    
      session
        .run("MATCH (rating:Rating) RETURN rating;")
        .then(function(result) {
          var response = [];
    
          result.records.forEach(function(record){
            response.push(record._fields[0]);
          });
    
          res.status(200).json(response);
        })
        .catch((error) => {
          res.status(400).json(error);
        });
    });





// Return a list with all shows


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


// Return a show with id


routes.get('/shows/:id', function(req, res) {
  res.contentType('application/json');

  var id = req.params.id;

  Show.findOne({_id: id})
    .then(function (show) {
      res.status(200).json(show);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});





// Add a Show.


routes.post('/shows', function (req, res) {
    res.contentType('application/json');

    var body = req.body;

    Show.create(body, function(err, show) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(show);
        }
    });
});


// Update an existing show


routes.put('/shows/:id', function (req, res) {
    var showId = req.params.id;
    var body = req.body;
    Show.findOneAndUpdate({
        _id: showId
    }, {$set: {
        time: body.time,
        movie: {
          name: body.movie.name,
          genre: body.movie.genre,
          imagePath: body.movie.imagePath,
          duration: body.movie.duration
          
        },
        room:{
            roomname: body.room.roomname,
            seats: body.room.seats
        }
    }}).then(function (show) {
        res.status(200). json(show);
    }).catch((error) => {
        res.status(400).json(error);
    })
});

routes.get('/shows/movie/:name', function(req, res) {
    res.contentType('application/json');
  
    var nameFromUrl = req.params.name;
  
    Show.find({'movie.name': nameFromUrl})
      .then(function (shows) {
        res.status(200).json(shows);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

  routes.get('/shows/room/:roomname', function(req, res) {
    res.contentType('application/json');
  
    var roomnameFromUrl = req.params.roomname;
  
    Show.find({'room.roomname': roomnameFromUrl})
      .then(function (shows) {
        res.status(200).json(shows);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });



// Delete an advertisement


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