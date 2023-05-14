import "./prescriptionlist.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PrescriptionList = () => {
  const { name } = useParams();
  console.log(name);
  const [patientPrescriptions, setPatientPrescriptions] = useState(null);
  useEffect(() => {
    const fetchPrescriptionList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/prescriptions/${name}`
        );
        setPatientPrescriptions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrescriptionList();
  }, [name]);
  return (
    
    <div className="parent-list">
      <h1>Prescription List</h1>
      {
        patientPrescriptions?.map((prescription, index) => (
          <div className="prescription-card" key={index}>
            <div className="prescription-card-heading">
              Prescription{index + 1}
            </div>
            <div className="prescription-date"> {prescription.createdAt}</div>
          </div>
        ))
        }
    </div>
  );
};

export default PrescriptionList;
