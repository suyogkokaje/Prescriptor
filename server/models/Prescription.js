const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const prescriptionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lst: [{//list of objects
    medicine: {
      type: String,
      required: true
    },
    days: {
      type: Number,
      required: true
    },
    dosage: {
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
