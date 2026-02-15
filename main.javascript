const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  totalTickets: { type: Number, required: true, min: 0 },
  availableTickets: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 }
});

module.exports = mongoose.model('Event', EventSchema);