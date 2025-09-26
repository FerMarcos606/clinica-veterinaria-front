import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './PatientCreationPage.css';
import pacientsService from '../../../services/pacients/PacientsService';

const PatientCreationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitError('');

    try {
      await pacientsService.createPatient(data);
      console.log('Datos del paciente:', data);
      alert('¡Paciente creado con éxito!');
    } catch (error) {
      console.error('Error en la creación del paciente:', error);
      setSubmitError(error.message || 'Error al procesar la creación');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="patient-creation-page">
      <div className="patient-creation-page__hero">
        <div className="patient-creation-page__hero-container">
          <h1 className="patient-creation-page__title">
            Formulario de Creación de Paciente
          </h1>
        </div>
      </div>

      <div className="patient-creation-page__container">
        <form className="patient-creation-form" onSubmit={handleSubmit(onSubmit)}>
          
          {submitError && (
            <div className="patient-creation-form__error patient-creation-form__error--general">
              {submitError}
            </div>
          )}

          <section className="patient-creation-form__section">
            <h2 className="patient-creation-form__section-title">
              Datos del Paciente
            </h2>
            
            <div className="patient-creation-form__row">
              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Número de Identificación <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('identificationNumber', { required: 'El número de identificación es obligatorio' })}
                  className={`patient-creation-form__input ${errors.identificationNumber ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.identificationNumber && (
                  <p className="patient-creation-form__error">{errors.identificationNumber.message}</p>
                )}
              </div>
              
              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Nombre <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('name', { required: 'El nombre es obligatorio' })}
                  className={`patient-creation-form__input ${errors.name ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.name && (
                  <p className="patient-creation-form__error">{errors.name.message}</p>
                )}
              </div>

              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Imagen (URL)
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('image')}
                  className={`patient-creation-form__input ${errors.image ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.image && (
                  <p className="patient-creation-form__error">{errors.image.message}</p>
                )}
              </div>

              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Edad <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="number"
                  disabled={isLoading}
                  {...register('age', { required: 'La edad es obligatoria', valueAsNumber: true })}
                  className={`patient-creation-form__input ${errors.age ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.age && (
                  <p className="patient-creation-form__error">{errors.age.message}</p>
                )}
              </div>

              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Familia <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('family', { required: 'La familia es obligatoria' })}
                  className={`patient-creation-form__input ${errors.family ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.family && (
                  <p className="patient-creation-form__error">{errors.family.message}</p>
                )}
              </div>

              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Raza <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  {...register('breed', { required: 'La raza es obligatoria' })}
                  className={`patient-creation-form__input ${errors.breed ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.breed && (
                  <p className="patient-creation-form__error">{errors.breed.message}</p>
                )}
              </div>

              <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  Sexo <span className="patient-creation-form__required">*</span>
                </label>
                <select
                  disabled={isLoading}
                  {...register('sex', { required: 'El sexo es obligatorio' })}
                  className={`patient-creation-form__input ${errors.sex ? 'patient-creation-form__input--error' : ''}`}
                >
                  <option value="">Seleccione...</option>
                  <option value="Female">Hembra</option>
                  <option value="Male">Macho</option>
                </select>
                {errors.sex && (
                  <p className="patient-creation-form__error">{errors.sex.message}</p>
                )}
              </div>
            </div>
          </section>

                        <div className="patient-creation-form__field">
                <label className="patient-creation-form__label">
                  ID del Tutor <span className="patient-creation-form__required">*</span>
                </label>
                <input
                  type="number"
                  disabled={isLoading}
                  {...register('tutor', { required: 'El ID del tutor es obligatorio', valueAsNumber: true })}
                  className={`patient-creation-form__input ${errors.tutor ? 'patient-creation-form__input--error' : ''}`}
                />
                {errors.tutor && (
                  <p className="patient-creation-form__error">{errors.tutor.message}</p>
                )}
              </div>

          <div className="patient-creation-form__submit">
            <button
              type="submit"
              disabled={isLoading}
              className={`patient-creation-form__button ${isLoading ? 'patient-creation-form__button--loading' : ''}`}
            >
              {isLoading ? 'Creando...' : 'Crear Paciente'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientCreationPage;
