const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  samples: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sample', sampleSchema);

