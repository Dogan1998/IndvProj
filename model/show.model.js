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

// ShowSchema.pre('remove', function(next) {
//   const Movie = mongoose.model('movie');

//   Movie.remove({ _id: { $in: this.movie } })
//     .then(() => next());

//   const Room = mongoose.model('room');

//   Room.remove({ id: { $in: this.room } })
//     .then(() => next());

// });

const Show = mongoose.model('show', ShowSchema);

 const show = new Show({
   time: '12:00',
   movie:( { name: 'film', genre: 'geen', imagePath: 'geen', duration: '0:00:00'}),
   room:({roomname: 'geen', seats: 5})
   
   
 }).save();

module.exports = ShowSchema;