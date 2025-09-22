import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario válido:', data);
    alert('Registro realizado con éxito.');
  };

  // Para comparar contraseñas
  const watchPassword = watch("contraseña");

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
                  {...register('nombre', { required: 'El nombre es obligatorio' })}
                  className={`registration-form__input ${
                    errors.nombre ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.nombre && (
                  <p className="registration-form__error">{errors.nombre.message}</p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Primer apellido <span className="registration-form__required">*</span>
                </label>
                <input
                  type="text"
                  {...register('primerApellido', { required: 'El primer apellido es obligatorio' })}
                  className={`registration-form__input ${
                    errors.primerApellido ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.primerApellido && (
                  <p className="registration-form__error">{errors.primerApellido.message}</p>
                )}
              </div>
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Segundo apellido
                </label>
                <input
                  type="text"
                  {...register('segundoApellido')}
                  className={`registration-form__input ${
                    errors.segundoApellido ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.segundoApellido && (
                  <p className="registration-form__error">{errors.segundoApellido.message}</p>
                )}
              </div>
              <div className="registration-form__field">
                <label className="registration-form__label">
                  DNI <span className="registration-form__required">*</span>
                </label>
                <input
                    type="text"
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
                  {...register('telefono', {
                    required: 'El número de teléfono es obligatorio',
                    pattern: {
                      value: /^\d{9}$/,
                      message: 'El teléfono debe tener 9 dígitos'
                    }
                  })}
                  className={`registration-form__input ${
                    errors.telefono ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.telefono && (
                  <p className="registration-form__error">{errors.telefono.message}</p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Email <span className="registration-form__required">*</span>
                </label>
                <input
                  type="email"
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
                  {...register('contraseña', {
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
                    errors.contraseña ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.contraseña && (
                  <p className="registration-form__error">
                    {errors.contraseña.message}
                  </p>
                )}
              </div>
              
              <div className="registration-form__field">
                <label className="registration-form__label">
                  Repite tu contraseña <span className="registration-form__required">*</span>
                </label>
                <input
                  type="password"
                  {...register('repetirContraseña', {
                    required: 'Repetir contraseña es obligatorio',
                    validate: value => value === watchPassword || 'Las contraseñas no coinciden'
                  })}
                  className={`registration-form__input ${
                    errors.repetirContraseña ? 'registration-form__input--error' : ''
                  }`}
                />
                {errors.repetirContraseña && (
                  <p className="registration-form__error">{errors.repetirContraseña.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="registration-form__submit">
            <button
              type="submit"
              className="registration-form__button"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;