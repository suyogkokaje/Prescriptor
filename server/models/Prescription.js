const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lst: [{
    medicine: {
      type: String,
      required: true
    },
    preperation: {
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
      type: String,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
