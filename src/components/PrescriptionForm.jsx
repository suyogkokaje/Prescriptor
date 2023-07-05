import React from "react";
import { useState } from "react";
import "./prescriptionform.css";
import axios from "axios";

const PrescriptionForm = ({ handleAddItem, handleSetPatientName }) => {
  const [name, setName] = useState("");

  const handlePatientAdd = (event) => {
    event.preventDefault();
    setName(name);
    handleSetPatientName(name);
  };

  const medicineList = [
    {
      medicine: "chandraprabha vati",
      preparation: "Tab",
      dose: "1 tablet",
      direction: "After meal",
      frequency: "Twice daily",
      duration: "10 days",
      totalQuantity: "20 tablets",
      instructions: "Take with water after meals.",
    },
    {
      medicine: "cmandraprabha vati",
      preparation: "Tab",
      dose: "1 tablet",
      direction: "After meal",
      frequency: "Twice daily",
      duration: "10 days",
      totalQuantity: "20 tablets",
      instructions: "Take with water after meals.",
    },
    {
      medicine: "amritarishta",
      preparation: "Tab",
      dose: "1 tablet",
      direction: "After meal",
      frequency: "Twice daily",
      duration: "10 days",
      totalQuantity: "20 tablets",
      instructions: "Take with water after meals.",
    },
  ];

  const [medicine, setMedicine] = useState("");
  const [preperation, setPreperation] = useState("");
  const [dose, setDose] = useState("");
  const [direction, setDirection] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [instructions, setInstructions] = useState("");
  const [lst, setLst] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");


  const handleAdd = (event) => {
    event.preventDefault(); // prevent form submission
    const prescription = {
      medicine: medicine,
      preperation: preperation,
      dose: dose,
      direction: direction,
      frequency: frequency,
      duration: duration,
      totalQuantity: totalQuantity,
      instructions: instructions,
    };
    handleAddItem(prescription);
    setLst([...lst, prescription]);
    setMedicine("");
    setPreperation("");
    setDose("");
    setDirection("");
    setFrequency("");
    setDuration("");
    setTotalQuantity("");
    setInstructions("");
    // console.log(lst);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent form submission

    try {
      const response = await axios.post(
        "http://localhost:4000/prescriptions",
        {
          name,
          lst,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setName("");
      setMedicine("");
      setPreperation("");
      setDose("");
      setDirection("");
      setFrequency("");
      setDuration("");
      setTotalQuantity("");
      setInstructions("");
      setLst([]);
    } catch (error) {
      console.error(error); // log any errors
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setMedicine(suggestion.medicine);
    setPreperation(suggestion.preparation);
    setDose(suggestion.dose);
    setDirection(suggestion.direction);
    setFrequency(suggestion.frequency);
    setDuration(suggestion.duration);
    setTotalQuantity(suggestion.totalQuantity);
    setInstructions(suggestion.instructions);
    setSelectedSuggestion(suggestion.medicine);
  };
  

  return (
    <div className="form-parent">
      <div className="form-title">Prescription</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-tile">
            <label>Name of the Patient:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div className="form-btns">
            <button onClick={handlePatientAdd}>Add</button>
          </div>
          <br></br>
          <div className="form-tile">
            <label>Name of the medicine:</label>
            <div className="suggestions">
              <input
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
              />
              {medicine &&
                medicineList
                  .filter(
                    (item) =>
                      item.medicine
                        .toLowerCase()
                        .indexOf(medicine.toLowerCase()) !== -1
                  )
                  .map((suggestion) => (
                    <button
                      key={suggestion.medicine}
                      onClick={() => handleSelectSuggestion(suggestion)}
                      className={`suggestion ${
                        selectedSuggestion === suggestion.medicine
                          ? "selected"
                          : ""
                      }`}
                    >
                      {suggestion.medicine}
                    </button>
                  ))}
            </div>
          </div>
          <div className="form-tile">
            <label>Preparation:</label>
            <select
              value={preperation}
              onChange={(e) => setPreperation(e.target.value)}
            >
              <option value="">Select an Option</option>
              <option value="Tab">Tab</option>
              <option value="Cap">Cap</option>
              <option value="Inj">Inj</option>
            </select>
          </div>
          <div className="form-tile">
            <label>Duration:</label>
            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-tile">
            <label>Total Quantity:</label>
            <input
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-tile">
            <label>Dose:</label>
            <input
              value={dose}
              onChange={(e) => setDose(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-tile">
            <label>Direction:</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            >
              <option value="">Select an Option</option>
              <option value="Before breakfast">Before breakfast</option>
              <option value="After breakfast">After breakfast</option>
              <option value="Before lunch">Before lunch</option>
              <option value="After lunch">After lunch</option>
              <option value="Before dinner">Before dinner</option>
              <option value="After dinner">After dinner</option>
              <option value="Before meal">Before meal</option>
              <option value="After meal">After meal</option>
            </select>
          </div>
          <div className="form-tile">
            <label>Frequency:</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="">Select an Option</option>
              <option value="If required">If required</option>
              <option value="Immediately">Immediately</option>
              <option value="Once a day">Once a day</option>
              <option value="Twice daily">Twice daily</option>
              <option value="Thrice daily">Thrice daily</option>
              <option value="Four times a day">Four times a day</option>
              <option value="Every hour">Every hour</option>
              <option value="Every night at bedtime">
                Every night at bedtime
              </option>
              <option value="Every day">Every day</option>
              <option value="Every other day">Every other day</option>
              <option value="Every four hours">Every four hours</option>
              <option value="Once a week">Once a week</option>
              <option value="Thrice a week">Thrice a week</option>
            </select>
          </div>
          <div className="form-tile">
            <label>Instructions:</label>
            <input
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-btns">
            <button onClick={handleAdd}>Add</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionForm;
