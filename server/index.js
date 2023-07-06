const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());

mongoose.connect('mongodb+srv://suyogkokaje:12345@cluster0.lhx57xp.mongodb.net/', { useNewUrlParser: true });

// {
//     "name":"Suyog Kokaje",
//     "address":"rtn",
//     "age":10,
//     "weight":10,
//     "height":150,
//     "gender":"male",
//     "mobileno":1234567890,
//     "bloodgroup":"A+ve",
//     "systolicBP":90,
//     "diastolicBP":120,
//     "spO2":100,
//     "pulse":1000,
//     "options":[true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
//     "menshistory":"none"
//   }

const Patient = require('./models/PatientHistory');

//Patient History

// CREATE
app.post('/patientHistory', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(200).send(patient);
    } catch (err) {
        res.status(400).send(err);
    }
});

// READ (GET patient history of all the patients)
app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(400).send(err);
    }
});

// READ (GET patient history by patient name)
app.get('/patients/:name', async (req, res) => {
    try {
        const patient = await Patient.findOne({ name: req.params.name });
        if (!patient) {
            res.status(404).send('Patient history not found');
            return;
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(400).send(err);
    }
});

// UPDATE Patient History
app.put('/patients/:name', async (req, res) => {
    try {
        const patient = await Patient.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        if (!patient) {
            return res.status(404).send('Patient not found');
        }
        res.send(patient);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// DELETE Patient History
app.delete('/patients/:name', async (req, res) => {
    try {
        const patient = await Patient.findOneAndDelete({ name: req.params.name });
        if (!patient) {
            return res.status(404).send('Patient not found');
        }
        res.send(patient);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const Prescription = require('./models/Prescription');

//Create Prescription
app.post('/prescriptions', async (req, res) => {
    const { name, lst } = req.body;

    const newPrescription = new Prescription({
        name: name,
        lst: lst
    });

    try {
        const result = await newPrescription.save();
        res.status(201).json({
            message: 'Prescription created successfully',
            prescription: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating prescription',
            error: error
        });
    }
});

app.get('/prescriptions/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const prescriptions = await Prescription.find({ name: name });
        res.json(prescriptions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get Prescription List by the name of the patient

const Medicine = require('./models/Medicine');

// create medicine route
app.post('/medicines', async (req, res) => {
    try {
        const medicine = new Medicine(req.body);
        const savedMedicine = await medicine.save();
        res.status(201).json(savedMedicine);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create medicine' });
    }
});

// get all medicines route

app.get('/medicines', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch medicines' });
    }
});



const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
