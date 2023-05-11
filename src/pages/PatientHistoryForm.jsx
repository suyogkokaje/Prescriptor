import { useState } from "react";
import "./patienthistoryform.css";
import axios from "axios";

const PatientHistoryForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState("male");
  const [mobileNo, setMobileNo] = useState();

  const [bloodgroup, setBloodgroup] = useState("A+ve");
  const [systolicBP, setSystolicBP] = useState();
  const [diastolicBP, setDiastolicBP] = useState();
  const [spO2, setSpO2] = useState();
  const [pulse, setPulse] = useState();
  const [options, setOptions] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [menshistory, setMenshistory] = useState("");
  const handleOptionChange = (index) => {
    const newOptions = [...options];
    newOptions[index] = !newOptions[index];
    setOptions(newOptions);
  };

  const optionCheckboxes = options.map((option, index) => (
    <label>
      <input
        type="checkbox"
        id={index}
        checked={option}
        onChange={() => handleOptionChange(index)}
      />
      Option {index + 1}
    </label>
  ));

  const patientHistory = {
    name,
    address,
    age,
    weight,
    height,
    gender,
    mobileNo,
    bloodgroup,
    systolicBP,
    diastolicBP,
    spO2,
    pulse,
    options,
    menshistory,
  };

  const patientHistoryObj = {
    name: patientHistory.name,
    address: patientHistory.address,
    age: patientHistory.age,
    weight: patientHistory.weight,
    height: patientHistory.height,
    gender: patientHistory.gender,
    mobileNo: patientHistory.mobileNo,
    bloodgroup: patientHistory.bloodgroup,
    systolicBP: patientHistory.systolicBP,
    diastolicBP: patientHistory.diastolicBP,
    spO2: patientHistory.spO2,
    pulse: patientHistory.pulse,
    options: patientHistory.options,
    menshistory: patientHistory.menshistory,
  };

  // const formData = JSON.stringify(patientHistoryObj);

  const handleHistory = (e) => {
    e.preventDefault();

    // submit the form data
    // console.log(patientHistory);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/patientHistory",
        patientHistoryObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(formData);
      // console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="history">
      <div className="form-heading">Patient History Form</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label className="primaryField">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Age:
            <input
              type="Number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Weight:
            <input
              type="Number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Height:
            <input
              type="Number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="multi-select"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="primaryField">
            Contact No.:
            <input
              type="Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Blood Group:
            <select
              value={bloodgroup}
              onChange={(e) => setBloodgroup(e.target.value)}
              required
              className="multi-select"
            >
              <option value="male">A+ve</option>
              <option value="male">A-ve</option>
              <option value="male">O+ve</option>
              <option value="male">O-ve</option>
              <option value="male">B+ve</option>
              <option value="male">B-ve</option>
              <option value="female">AB+ve</option>
              <option value="other">AB-ve</option>
            </select>
          </label>
          <label className="primaryField">
            systolic BP:
            <input
              type="Number"
              value={systolicBP}
              onChange={(e) => setSystolicBP(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            diastolic BP:
            <input
              type="Number"
              value={diastolicBP}
              onChange={(e) => setDiastolicBP(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            SpO2:
            <input
              type="Number"
              value={spO2}
              onChange={(e) => setSpO2(e.target.value)}
              required
            />
          </label>
          <label className="primaryField">
            Pulse:
            <input
              type="Number"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              required
            />
          </label>
          <h2>Past History</h2>
          <div className="options">{optionCheckboxes}</div>

          <label className="primaryField">
            Menstrual/Obstetrical History:
            <input
              type="text"
              value={menshistory}
              onChange={(e) => setMenshistory(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default PatientHistoryForm;
