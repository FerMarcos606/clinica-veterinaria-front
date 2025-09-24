// components/LoginModal.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authService from '../../services/auth/AuthService'; // 🔒 Importamos el service
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError('');
    setSuccessMessage('');

    try {
      const response = await authService.loginUser(data);
      console.log('Respuesta backend login:', response);

      // Mensaje de éxito
      setSuccessMessage('¡Login exitoso! Bienvenido de vuelta.');
      
      // Limpiar formulario
      reset();
      
      // Cerrar modal después de un breve delay para mostrar el mensaje
      setTimeout(() => {
        onClose();
        setSuccessMessage(''); // Limpiar mensaje para la próxima vez
      }, 1500);

    } catch (error) {
      console.error('Error en el login:', error);
      setSubmitError(error.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal__overlay" onClick={handleOverlayClick}>
      <div className="login-modal">
        {/* Botón cerrar */}
        <button
          className="login-modal__close"
          onClick={onClose}
          type="button"
          aria-label="Cerrar modal"
        >
          ×
        </button>

        {/* Logo */}
        <div className="login-modal__header">
          <div className="login-modal__logo">
            <span className="login-modal__logo-text">Margarita</span>
            <span className="login-modal__logo-subtitle">LOGO</span>
          </div>
        </div>

        {/* Título */}
        <h2 className="login-modal__title">Iniciar sesión</h2>

        {/* Formulario */}
        <form className="login-modal__form" onSubmit={handleSubmit(onSubmit)}>
          {/* Mensaje de éxito */}
          {successMessage && (
            <div className="login-modal__success">
              {successMessage}
            </div>
          )}

          {/* Error general */}
          {submitError && (
            <div className="login-modal__error login-modal__error--general">
              {submitError}
            </div>
          )}

          {/* Campo Email */}
          <div className="login-modal__field">
            <label className="login-modal__label">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tunombre@gmail.com"
              disabled={isLoading}
              {...register('email', {
                required: 'El email es obligatorio',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email no válido',
                },
              })}
              className={`login-modal__input ${
                errors.email ? 'login-modal__input--error' : ''
              }`}
            />
            {errors.email && (
              <p className="login-modal__error">{errors.email.message}</p>
            )}
          </div>

          {/* Campo Password */}
          <div className="login-modal__field">
            <label className="login-modal__label">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="**********"
              disabled={isLoading}
              {...register('password', {
                required: 'La contraseña es obligatoria',
              })}
              className={`login-modal__input ${
                errors.password ? 'login-modal__input--error' : ''
              }`}
            />
            {errors.password && (
              <p className="login-modal__error">{errors.password.message}</p>
            )}
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={isLoading}
            className={`login-modal__button ${
              isLoading ? 'login-modal__button--loading' : ''
            }`}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>

          {/* Footer */}
          <div className="login-modal__footer">
            <span className="login-modal__footer-text">¿No tienes una cuenta?</span>
            <button
              type="button"
              className="login-modal__footer-link"
              onClick={onSwitchToRegister}
            >
              Crea una cuenta nueva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;