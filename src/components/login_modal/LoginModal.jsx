import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError('');

    try {
      // Aquí llamarías a tu servicio de login
      console.log('Login data:', data);
      
      // Simular llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Si el login es exitoso, cerrar el modal
      onClose();
      
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
        {/* Close button */}
        <button 
          className="login-modal__close"
          onClick={onClose}
          type="button"
          aria-label="Cerrar modal"
        >
          ×
        </button>

        {/* Logo section */}
        <div className="login-modal__header">
          <div className="login-modal__logo">
            <span className="login-modal__logo-text">Margarita</span>
            <span className="login-modal__logo-subtitle">LOGO</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="login-modal__title">Iniciar sesión</h2>

        {/* Form */}
        <form className="login-modal__form" onSubmit={handleSubmit(onSubmit)}>
          {/* Error general del submit */}
          {submitError && (
            <div className="login-modal__error login-modal__error--general">
              {submitError}
            </div>
          )}

          {/* Email field */}
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
                  message: 'Email no válido'
                }
              })}
              className={`login-modal__input ${
                errors.email ? 'login-modal__input--error' : ''
              }`}
            />
            {errors.email && (
              <p className="login-modal__error">{errors.email.message}</p>
            )}
          </div>

          {/* Password field */}
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
                minLength: {
                  value: 6,
                  message: 'Mínimo 6 caracteres'
                }
              })}
              className={`login-modal__input ${
                errors.password ? 'login-modal__input--error' : ''
              }`}
            />
            {errors.password && (
              <p className="login-modal__error">{errors.password.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`login-modal__button ${isLoading ? 'login-modal__button--loading' : ''}`}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>

          {/* Register link */}
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