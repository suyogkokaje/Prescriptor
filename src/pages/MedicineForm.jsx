import React, { useState } from "react";
import "./medicineform.css";
import axios from "axios";

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    medicine: "",
    preparation: "",
    dose: "",
    direction: "",
    frequency: "",
    duration: "",
    totalQuantity: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/medicines",
        {
          medicine: medicine.medicine,
          preparation: medicine.preparation,
          dose: medicine.dose,
          direction: medicine.direction,
          frequency: medicine.frequency,
          duration: medicine.duration,
          totalQuantity: medicine.totalQuantity,
          instructions: medicine.instructions,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMedicine({
        medicine: "",
        preparation: "",
        dose: "",
        direction: "",
        frequency: "",
        duration: "",
        totalQuantity: "",
        instructions: "",
      });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="medicineformparent">
      <form className="medicine-form" onSubmit={handleSubmit}>
        <label>
          Medicine:
          <input
            type="text"
            name="medicine"
            value={medicine.medicine}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Preparation:
          <select
            name="preparation"
            value={medicine.preparation}
            onChange={handleChange}
          >
            <option value="">Select an Option</option>
            <option value="Tab">Tab</option>
            <option value="Cap">Cap</option>
            <option value="Inj">Inj</option>
          </select>
        </label>
        <br />

        <label>
          Dose:
          <input
            type="text"
            name="dose"
            value={medicine.dose}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Direction:
          <select
            name="direction"
            value={medicine.direction}
            onChange={handleChange}
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
        </label>
        <br />

        <label>
          Frequency:
          <select
            name="frequency"
            value={medicine.frequency}
            onChange={handleChange}
          >
            <option value="">Select an Option</option>
            <option value="If required">If required</option>
            <option value="Immediately">Immediately</option>
            <option value="Once a day">Once a day</option>
            <option value="Twice daily">Twice daily</option>
            <option value="Thrice daily">Thrice daily</option>
            <option value="Four times a day">Four times a day</option>
            <option value="Every hour">Every hour</option>
            <option value="Every night at bedtime">Every night at bedtime</option>
            <option value="Every day">Every day</option>
            <option value="Every other day">Every other day</option>
            <option value="Every four hours">Every four hours</option>
            <option value="Once a week">Once a week</option>
            <option value="Thrice a week">Thrice a week</option>
          </select>
        </label>
        <br />

        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={medicine.duration}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Total Quantity:
          <input
            type="text"
            name="totalQuantity"
            value={medicine.totalQuantity}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Instructions:
          <input
            type="text"
            name="instructions"
            value={medicine.instructions}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MedicineForm;
