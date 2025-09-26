import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientCreationPage from "../pages/admin/PatientCreation/PatientCreationPage";
import CustomerArea from "../pages/customer_area/CustomerArea";
import PatientList from "../pages/admin/patientList/PatientListPage";
import PatientDetails from "../pages/admin/patientDetails/PatientDetailsPage";

import RegistrationPage from "../pages/registration/RegistrationPage";
export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create-patients" element={<PatientCreationPage />} />
          <Route path="/customer-area" element={<CustomerArea />} />



          <Route path="/listaPacientes" element={<PatientList />} />

          <Route path="/detallePaciente" element={<PatientDetails />} />
          
          </Routes>  
    )
  
}