const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientHistory = new Schema({
    name: String,
    address: String,
    age: Number,
    weight: Number,
    height: Number,
    gender: String,
    mobileno: Number,
    bloodgroup: String,
    systolicBP: Number,
    diastolicBP: Number,
    spO2: Number,
    pulse: Number,
    options: [Boolean],
    menshistory: String
});

module.exports = mongoose.model('Patient', PatientHistory);