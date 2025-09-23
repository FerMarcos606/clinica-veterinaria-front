import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import registerService from '../services/RegisterService';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError('');

    try {
      const result = await registerService.registerUser(data);
      
      if (result.success && result.status === 201) {
        console.log('Registro exitoso:', result.data);
        alert('¡Registro realizado con éxito!');
        
        // Opcional: redireccionar o limpiar el formulario
        // reset(); // Para limpiar el formulario
        // navigate('/login'); // Para redireccionar
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setSubmitError(error.message || 'Error al procesar el registro');
    } finally {
      setIsLoading(false);
    }
  };

  // Para comparar passwords
  const watchPassword = watch("password");

  return (
    <div className="registration-page">
      {/* Hero Section */}
      <div className="registration-page__hero">
        <div className="registration-page__hero-container">
          <h1 className="registration-page__title">
            Formulario de registro
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="registration-page__container">
        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Error general del submit */}
          {submitError && (
            <div className="registration-form__error registration-form__error--general">
              {submitError}
            </div>
          )}

          {/* Datos personales */}
          <section className="registration-form__section">
            <h2 className="registration-form__section-title">
              Datos personales
            </h2>
            
            <div className="registration-form__row">
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Nombre <span className="registration-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  className={`registration-form__input ${
                    errors.name ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.name && (
                  <p className="registration-form__error">{errors.name.message}</p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Primer apellido <span className="registration-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('firstSurname', { required: 'El primer apellido es obligatorio' })}
                  className={`registration-form__input ${
                    errors.firstSurname ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.firstSurname && (
                  <p className="registration-form__error">{errors.firstSurname.message}</p>
                )}
              </div>
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Segundo apellido
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('secondSurname')}
                  className={`registration-form__input ${
                    errors.secondSurname ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.secondSurname && (
                  <p className="registration-form__error">{errors.secondSurname.message}</p>
                )}
              </div>
              <div className="registration-form__field">
                <label className="registration-form__label">
                  DNI <span className="registration-form__required">*</span>
                </label>
                <input
                    type="text"
                    disabled={isLoading}
                    {...register('dni', { 
                        required: 'El DNI es obligatorio',
                        pattern: {
                            value: /^[0-9]{8}[A-Za-z]$/, 
                            message: 'El DNI debe tener 8 números y una letra'
                        }
                    })}
                    className={`registration-form__input ${errors.dni ? 'registration-form__input--error' : ''}`}
                />
                {errors.dni && (
                  <p className="registration-form__error">{errors.dni.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section className="registration-form__section">
            <h2 className="registration-form__section-title">
              Contacto
            </h2>
            
            <div className="registration-form__row">
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Teléfono <span className="registration-form__required">*</span>
                </label>
                <input
                  type="tel"
                  disabled={isLoading}
                  {...register('phoneNumber', {
                    required: 'El número de teléfono es obligatorio',
                    pattern: {
                      value: /^\d{9}$/,
                      message: 'El teléfono debe tener 9 dígitos'
                    }
                  })}
                  className={`registration-form__input ${
                    errors.phoneNumber ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="registration-form__error">{errors.phoneNumber.message}</p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Email <span className="registration-form__required">*</span>
                </label>
                <input
                  type="email"
                  disabled={isLoading}
                  {...register('email', { 
                    required: 'El email es obligatorio',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Email no válido'
                    }
                  })}
                  className={`registration-form__input ${
                    errors.email ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.email && (
                  <p className="registration-form__error">{errors.email.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Inicio de sesión */}
          <section className="registration-form__section">
            <h2 className="registration-form__section-title">
              Inicio de sesión
            </h2>
            
            <div className="registration-form__row">
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Contraseña <span className="registration-form__required">*</span>
                </label>
                <input
                  type="password"
                  disabled={isLoading}
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                    minLength: {
                      value: 8,
                      message: 'Mínimo 8 caracteres'
                    },
                    validate: {
                      hasUpperCase: (value) => /[A-Z]/.test(value) || 'Falta mayúscula',
                      hasLowerCase: (value) => /[a-z]/.test(value) || 'Falta minúscula', 
                      hasNumber: (value) => /\d/.test(value) || 'Falta número',
                      hasSymbol: (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Falta símbolo'
                    }
                  })}
                  className={`registration-form__input ${
                    errors.password ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.password && (
                  <p className="registration-form__error">
                    {errors.password.message}
                  </p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Repite tu contraseña <span className="registration-form__required">*</span>
                </label>
                <input
                  type="password"
                  disabled={isLoading}
                  {...register('repeatPassword', {
                    required: 'Repetir contraseña es obligatorio',
                    validate: value => value === watchPassword || 'Las contraseñas no coinciden'
                  })}
                  className={`registration-form__input ${
                    errors.repeatPassword ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.repeatPassword && (
                  <p className="registration-form__error">{errors.repeatPassword.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="registration-form__submit">
            <button
              type="submit"
              disabled={isLoading}
              className={`registration-form__button ${isLoading ? 'registration-form__button--loading' : ''}`}
            >
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;