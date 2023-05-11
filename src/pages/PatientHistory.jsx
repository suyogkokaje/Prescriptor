import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./patienthistory.css";

const PatientPage = () => {
  const { name } = useParams();
  const [patientHistory, setPatientHistory] = useState(null);

  useEffect(() => {
    const fetchPatientHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/patients/${name}`
        );
        setPatientHistory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPatientHistory();
  }, [name]);

  const optionsList =
    patientHistory && patientHistory.options
      ? patientHistory.options.map((option, index) => (
          <div key={index}>
            <input type="checkbox" checked={option} readOnly />
            <label>{`Option ${index + 1}`}</label>
          </div>
        ))
      : null;

  return (
    <div className="patient-card-parent">
      {patientHistory && (
        <div className="patient-card">
          <div className="patient-card-heading">Patient History</div>
          <p>
            <span>Name</span>: {patientHistory.name}
          </p>
          <p>
            <span>Address</span>: {patientHistory.address}
          </p>
          <p>
            <span>Age</span>: {patientHistory.age}
          </p>
          <p>
            <span>Weight</span>: {patientHistory.weight}
          </p>
          <p>
            <span>Height</span>: {patientHistory.height}
          </p>
          <p>
            <span>Gender</span>: {patientHistory.gender}
          </p>
          <p>
            <span>Mobile No</span>: {patientHistory.mobileNo}
          </p>
          <p>
            <span>Blood Group</span>: {patientHistory.bloodgroup}
          </p>
          <p>
            <span>Systolic BP</span>: {patientHistory.systolicBP}
          </p>
          <p>
            <span>Diastolic BP</span>: {patientHistory.diastolicBP}
          </p>
          <p>
            <span>SpO2</span>: {patientHistory.spO2}
          </p>
          <p>
            <span>Pulse</span>: {patientHistory.pulse}
          </p>
          <div>
            {/* other patient history details */}
            <h3>Options:</h3>
            <div className="card-options">{optionsList}</div>
          </div>
          <p>
            <span>Menstrual/Obstetrical History</span>: {patientHistory.menshistory}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientPage;
