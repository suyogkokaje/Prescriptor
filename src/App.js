import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Prescription from "./pages/Prescription";
import Patients from "./pages/Patients";
import PatientHistory from "./pages/PatientHistory";
import PatientHistoryForm from "./pages/PatientHistoryForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prescription/>}/>
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/patients/:name" element={<PatientHistory/>}/>
        <Route path="/historyForm" element={<PatientHistoryForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
