//
// ./api/v1/movies.routes.v1.js
//
// var express = require('express');
// var routes = express.Router();
// var mongodb = require('../config/mongo.db');
// var Movie = require('../model/movie.model');

// //
// // Geef een lijst van alle users.
// //
// routes.get('/movies', function (req, res) {
//     res.contentType('application/json');

//     Movie.find({})
//         .then(function (movies) {
//             res.status(200).json(movies);
//         })
//         .catch((error) => {
//         res.status(400).json(error);
// });
// });

// //
// // Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// // Vorm van de URL: http://hostname:3000/api/v1/users/23
// //
// routes.get('/movies/:id', function (req, res) {
//     res.contentType('application/json');

//     var movieId = req.params.id;

//     Movie.findOne({ _id: movieId})
//         .then(function (movie) {
//             res.status(200).json(movie);
//         }).catch((error) => {
//         res.status(400).json(error);
// })
// });

// //
// // Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// // Vorm van de URL: POST http://hostname:3000/api/v1/users
// //
// routes.post('/movies', function (req, res) {
//     res.contentType('application/json');

//     var body = req.body;
//     body.status = false;

//     Movie.create(body, function(err, movie) {
//         if (err) {
//             res.status(400).json(error);
//         } else {
//             res.status(200).json(movie);
//         }
//     })
// });

// //
// // Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// // Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// // of als property in de request body.
// // 
// // Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
// //



// routes.put('/movies/:id', function (req, res) {
//     var movieId = req.params.id;
//     Movie.findOneAndUpdate({
//         _id: movieId
//     }, {$set: {

//                  name: req.body.name,
//                  genre: req.body.genre,
//                  duration: req.body.duration,
//                  imagePath: req.body.imagePath 
    

//     }}).then(function (movie) {
//         res.status(200). json(movie);
//     }).catch((error) => {
//         res.status(400).json(error);
// })
// });


// //
// // Verwijder een bestaande user.
// // Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// // of als property in de request body.
// // 
// // Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
// //

// routes.delete('/movies/:id', function (req, res) {
//     var movieId = req.params.id;

//     Movie.findOneAndRemove({ _id: movieId})
//         .then(function (movie) {
//             res.status(200).json({"response": "Successfully deleted"});
//         }).catch((error) => {
//         res.status(400).json(error);
// })
// });


// module.exports = routes;