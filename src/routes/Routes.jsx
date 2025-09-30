import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/HomePage";
import PatientCreationPage from "../pages/admin/PatientCreation/PatientCreationPage";
import CustomerArea from "../pages/customer_area/CustomerArea";
import PatientList from "../pages/admin/patientList/PatientListPage";
import PatientDetails from "../pages/admin/patientDetails/PatientDetailsPage";
import UserListPage from "../pages/admin/userList/UserListPage";
import ApointmentPage from "../pages/appointments/AppointmentPage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import AppointmentDetails from "../pages/admin/AppointmentDetails/AppointmentDetails";
import Contact from "../pages/contact/Contact";
import Services from "../pages/services/Services";
export default function AppRoutes () {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create-patients" element={<PatientCreationPage />} />
          <Route path="/customer-area" element={<CustomerArea />} />

          <Route path="/appointment-details" element={<AppointmentDetails />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios" element={<Services />} />


        <Route path="/citas" element={<ApointmentPage />} />
          <Route path="/listaPacientes" element={<PatientList />} />
          <Route path="/admin/user-list" element={<UserListPage />} />

          <Route path="/detallePaciente" element={<PatientDetails />} />
          
          </Routes>  
    )
  
}