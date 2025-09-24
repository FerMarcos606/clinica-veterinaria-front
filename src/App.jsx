import React, { useState } from 'react';
import LoginModal from './components/login_modal/LoginModal';
import RegistrationPage from './pages/RegistrationPage';


import './App.css'
import Header from './components/header/Header';
import RegistrationPage from "../pages/RegistrationPage";

function App() {
  return (
  <div className='app'>
    <Header />;
  <RegistrationPage />;
  </div>
  );
}

  return (
    <div className="App">
      {/* Links para abrir os modais */}
      <a href="#!" onClick={handleOpenLogin}>
        Iniciar sesión
      </a>
      {' | '}
      <a href="#!" onClick={handleOpenRegister}>
        Registrarse
      </a>

      {/* Modal de login */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />

      {/* Modal de registro (você pode tratá-lo como um modal ou página completa) */}
      {isRegisterOpen && (
        <div className="modal-overlay"> {/* Adicione um overlay para simular um modal */}
          <div className="modal-content">
            <button onClick={handleCloseRegister} className="modal-close-button">X</button>
            <RegistrationPage />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;