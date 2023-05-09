import React, { useState } from "react";
import { Link } from "react-router-dom";
import './patients.css';
const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(10);

  const patientList = [
    "Suyog Kokaje",
    "Rohit Dhengale",
    "Yash Bhujbal",
    "Atharva Joshi",
    "Pranali Jadhav",
    "Kunal Raut",
    "Sachin Tendulkar",
    "Virat Kohli",
    "Rohit Sharma",
    "Suresh Raina",
    "M S Dhoni",
  ];

  // Logic for searching patients
  const filteredPatients = patientList.filter((patient) =>
    patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic for displaying patients
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPatients.length / patientsPerPage); i++) {
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
            <Link style={{ textDecoration: 'none', color:'black' }} to={`/patients/${patient}`} key={patient}>
                <li key={patient}>{patient}</li>
            </Link>
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
