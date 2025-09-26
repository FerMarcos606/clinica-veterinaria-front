import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientCreationPage from "../pages/admin/PatientCreation/PatientCreationPage";
import CustomerArea from "../pages/customer_area/CustomerArea";

import RegistrationPage from "../pages/registration/RegistrationPage";
export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create-patients" element={<PatientCreationPage />} />
          <Route path="/customer-area" element={<CustomerArea />} />
          </Routes>
          

    )
  
}