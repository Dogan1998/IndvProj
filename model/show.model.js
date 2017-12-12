const mongoose = require('mongoose');
const MovieSchema = require('./movie.model');
const RoomSchema = require('./room.model');
const Schema = mongoose.Schema;
const Movie = require('../model/movie.model');
const Room = require('../model/room.model');

const ShowSchema = new Schema({
  time: String,
  movie: MovieSchema,
  room: RoomSchema
});

//  ShowSchema.pre('remove', function(next) {
//    const Movie = mongoose.model('movie');

//    Movie.remove({ _id: { $in: this.movie } })
//      .then(() => next());

//    const Room = mongoose.model('room');

//    Room.remove({ id: { $in: this.room } })
//      .then(() => next());

//  });

const Show = mongoose.model('show', ShowSchema);

   const show = new Show({
     time: '12:00',
     movie:( { name: 'justice league', genre: 'actie', imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Justice_League_2017_film_logo.jpg', duration: '01:00:00'}),
     room:({roomname: 'room 5', seats: 5})
   
   
   }).save();

module.exports = Show;