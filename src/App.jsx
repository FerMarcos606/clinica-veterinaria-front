import React, { useState } from 'react';
import LoginModal from './components/login_modal/LoginModal';
import RegistrationPage from '../pages/RegistrationPage'; // Importe seu componente de registro

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Novo estado para o modal de registro

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false); // Garante que o modal de registro está fechado
  };
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false); // Garante que o modal de login está fechado
  };
  const handleCloseRegister = () => setIsRegisterOpen(false);

  const handleSwitchToRegister = () => {
    handleCloseLogin();
    handleOpenRegister();
  };

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