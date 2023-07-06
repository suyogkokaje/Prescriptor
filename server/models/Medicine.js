const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medicine: {
    type: String,
    required: true
  },
  preparation: {
    type: String,
    required: true
  },
  dose: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  totalQuantity: {
    type: String,
    required: true
  },
  instructions: {
    type: String
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
