import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientCreationPage from "../pages/admin/PatientCreation/PatientCreationPage";


export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-patients" element={<PatientCreationPage />} />
          
          </Routes>  
    )
  
}