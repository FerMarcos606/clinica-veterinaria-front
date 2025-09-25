import React from 'react';
import Header from './components/header/Header';
import AppointmentPage from "./pages/appointments/AppointmentPage";
import Footer from "./components/footer/Footer";
import './App.css';


import HomePage from "./pages/HomePage";

function App() {

  return (
    <div className="App">
          <Header />;
          <AppointmentPage />;
          <Footer />

    </div>
  );
}

export default App;