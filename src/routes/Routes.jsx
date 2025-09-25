import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientList from "../pages/admin/patientList/PatientListPage";


export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listaPacientes" element={<PatientList />} />
          </Routes>  
    )
  
}