const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  username: { type: String, required: true },
  from: String,
  to: String,
  time: String,
  price: Number,
  date: { type: String, default: new Date().toLocaleString() }
});

module.exports = mongoose.model('Booking', bookingSchema);
