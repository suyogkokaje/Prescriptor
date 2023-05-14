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

  const [medicine, setMedicine] = useState("");
  const [days, setDays] = useState("");
  const [dosage, setDosage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [lst, setLst] = useState([]);
  const handleAdd = (event) => {
    event.preventDefault(); // prevent form submission
    const prescription = {
      medicine,
      days,
      dosage,
      instructions,
    };
    handleAddItem(prescription);
    setLst([...lst, prescription]);
    setMedicine("");
    setDays("");
    setDosage("");
    setInstructions("");
    console.log(lst);
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
      setDays("");
      setDosage("");
      setInstructions("");
      setLst([]);
      console.log("This is the data:" + response.data); // log the response data
    } catch (error) {
      console.error(error); // log any errors
    }
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
            <input
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              type="text"
            />
          </div>
          <div className="form-tile">
            <label>Days:</label>
            <input
              value={days}
              onChange={(e) => setDays(e.target.value)}
              type="number"
            />
          </div>
          <div className="form-tile">
            <label>Dosage Frequency:</label>
            <input
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              type="text"
            />
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
