const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomname: String,
  seats: Number,
});

// const Room = mongoose.model('room', RoomSchema);

//  const room = new Room({
//   name: 'zaal A',
//   seats: 100
//  }).save();


module.exports = RoomSchema;