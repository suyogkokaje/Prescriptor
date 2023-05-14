import React from "react";
import prescriptionpage from "./prescriptionpage.css";


const PrescriptionPage = ({ lst, patientName}) => {
  return (
    <div className="page-parent" id="pdf">
      <div className="page">
        <div className="heading">SANJEEVANI AYURVED</div>

        <div className="address">
          LULE CHAWL, NEAR MAGANWADI, BACHELOR ROAD, WARDHA MAHARASHTRA 442001
        </div>

        <div className="personal">
          <div className="name">
            <span>Dr.</span> Nikhil C Tambhekar
          </div>
          <div className="regno">
            <span>Reg. No.</span> 1-80874-A-1
          </div>
          <div className="degree">
            <span>Degree: </span> BAMS,MD
          </div>
        </div>

        <div className="personal">
          <div className="time">
            <span>Time:</span> 10am to 1pm & 6pm to 9pm
          </div>
          <div className="contact">
            <span>Contact :</span> 758134213
          </div>
        </div>
        <div className="line"></div>
        <div className="patient">
          <div className="pname">
            <span>Patient's Name:</span> {patientName}
          </div>
          <div className="date">
            <span>Date :</span> {new Date().toLocaleString() + ""}
          </div>
        </div>
        <table className="prescription-table">
          <thead>
            <tr>
              <th>Name of the medicine</th>
              <th>Days</th>
              <th>Dosage Frequency</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {lst &&
              lst.map((item, index) => (
                <tr key={index}>
                  <td>{item.medicine}</td>
                  <td>{item.days}</td>
                  <td>{item.dosage}</td>
                  <td>{item.instructions}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrescriptionPage;
