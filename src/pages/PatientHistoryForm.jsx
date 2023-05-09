import { useState } from "react";
import "./patienthistoryform.css";

const PatientHistoryForm = () => {
  const [name, setName] = useState("");
  const [address,setAddress] = useState("")
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
    { id: "option1", label: "Option 1", value: false },
    { id: "option2", label: "Option 2", value: false },
    { id: "option3", label: "Option 3", value: false },
    { id: "option4", label: "Option 4", value: false },
    { id: "option5", label: "Option 5", value: false },
    { id: "option6", label: "Option 6", value: false },
    { id: "option7", label: "Option 7", value: false },
    { id: "option8", label: "Option 8", value: false },
    { id: "option9", label: "Option 9", value: false },
    { id: "option10", label: "Option 10", value: false },
    { id: "option11", label: "Option 11", value: false },
    { id: "option12", label: "Option 12", value: false },
    { id: "option13", label: "Option 13", value: false },
    { id: "option14", label: "Option 14", value: false },
    { id: "option15", label: "Option 15", value: false },
    { id: "option16", label: "Option 16", value: false },
    { id: "option17", label: "Option 17", value: false },
    { id: "option18", label: "Option 18", value: false },
    { id: "option19", label: "Option 19", value: false },
    { id: "option20", label: "Option 20", value: false },
    { id: "option21", label: "Option 21", value: false },
    { id: "option22", label: "Option 22", value: false },
  ]);
  const[menshistory,setMenshistory] = useState("")
  const handleOptionChange = (id) => {
    const updatedOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: !option.value };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  const optionCheckboxes = options.map((option) => (
    <label>
      <input
        type="checkbox"
        id={option.id}
        checked={option.value}
        onChange={() => handleOptionChange(option.id)}
      />
      {option.label}
    </label>
  ));

  const handleHistory = (e) => {
    e.preventDefault();
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
      menshistory
    };
    // submit the form data
    console.log(patientHistory);
  };

  return (
    <div className="history">
      <div className="form-heading">Patient History Form</div>
      <div className="form">
        <form>
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
          <button onClick={handleHistory}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default PatientHistoryForm;
