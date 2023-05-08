import React, { useState } from "react";
import PrescriptionForm from "../components/PrescriptionForm";
import PrescriptionPage from "../components/PrescriptionPage";
import prescription from "./prescription.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Prescription = () => {
  const [patientName, setPatientName] = useState("");
  const handleSetPatientName = (name) => {
    setPatientName(name);
  };

  const [prescriptionList, setPrescriptionList] = useState([]);
  const handleAddPrescription = (prescription) => {
    setPrescriptionList([...prescriptionList, prescription]);
  };

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("prescription.pdf");
  };

  return (
    <>
      <div className="parent">
        <PrescriptionForm
          handleAddItem={handleAddPrescription}
          handleSetPatientName={handleSetPatientName}
        />
        <PrescriptionPage
          id="pdf"
          lst={prescriptionList}
          patientName={patientName}
        />
      </div>
      <button className="btn" onClick={createPDF} type="button">
        Download PDF
      </button>
    </>
  );
};

export default Prescription;
