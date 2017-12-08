const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: String,
  genre: String,
  duration: String,
  imagePath: String
});

//const Movie = mongoose.model('movie', MovieSchema);

// const movie = new Movie({
//   name: 'Justice League',
//   genre: 'Action',
//   duration: '1:11:00',
//   imagePath: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Justice_League_2017_film_logo.jpg',
// }).save();

module.exports = MovieSchema;