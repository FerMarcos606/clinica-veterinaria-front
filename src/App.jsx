import React, { useState } from 'react';
import LoginModal from './components/login_modal/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleSwitchToRegister = () => {
    // Aquí podrías abrir un modal de registro en lugar del login
    console.log("Cambiar a registro");
    setIsLoginOpen(false);
  };

  return (
    <div className="App">
      {/* Enlace para abrir modal */}
      <a href="#!" onClick={handleOpenLogin}>
        Iniciar sesión
      </a>

      {/* Modal de login */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToRegister={handleSwitchToRegister}
      />
    </div>
  );
}

export default App;
