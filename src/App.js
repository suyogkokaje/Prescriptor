import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Prescription from "./pages/Prescription";
import Patients from "./pages/Patients";
import PatientHistory from "./pages/PatientHistory";
import PatientHistoryForm from "./pages/PatientHistoryForm";
import PrescriptionList from "./pages/PrescriptionList";
import MedicineForm from "./pages/MedicineForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prescription/>}/>
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/patients/:name" element={<PatientHistory/>}/>
        <Route path="/historyForm" element={<PatientHistoryForm/>}/>
        <Route path="/prescriptions/:name" element={<PrescriptionList/>}/>
        <Route path="/medicineform" element={<MedicineForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
