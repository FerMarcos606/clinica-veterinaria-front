import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientList from "../pages/admin/patientList/PatientListPage";
import PatientDetails from "../pages/admin/patientDetails/PatientDetailsPage";


export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/listaPacientes" element={<PatientList />} />

          <Route path="/detallePaciente" element={<PatientDetails />} />
          
          </Routes>  
    )
  
}