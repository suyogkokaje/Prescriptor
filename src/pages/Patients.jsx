import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./patients.css";
import axios from "axios";
const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(10);
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:4000/patients");
        setPatientList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPatients();
  }, []);

  

  // Logic for searching patients
  const filteredPatients = patientList.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  // Logic for displaying patients
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    Math.min(indexOfLastPatient, filteredPatients.length)
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredPatients.length / patientsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={(event) => setCurrentPage(Number(event.target.id))}
        className={currentPage === number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search patients"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="patient-list">
        <ul>
          {currentPatients.map((patient) => (

              <li key={patient._id}>
                <div>{patient.name}</div>
                <div className="btns-div">
                  <button className="btn" onClick={()=>{navigate(`/patients/${patient.name}`)}}>View History</button>
                  <button className="btn" onClick={()=>{navigate(`/prescriptions/${patient.name}`)}}>View Prescriptions</button>
                </div>
              </li>

          ))}
        </ul>
      </div>
      <div className="pagination">
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    </div>
  );
};

export default Patients;
