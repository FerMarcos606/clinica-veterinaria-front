import React, { useState } from 'react';
import './CustomerArea.css';

const CustomerArea = () => {
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addSamplePet = () => {
    const samplePets = [
      {
        id: 1,
        name: 'Faustina',
        treatment: 'Vitaminas porque está chiquita.'
      },
      {
        id: 2,
        name: 'Jacinto',
        treatment: 'Ninguno.'
      }
    ];
    setPets(samplePets);
  };

  const addSampleAppointment = () => {
    const sampleAppointment = {
      id: 1,
      petName: 'Faustina',
      date: '25/09/25',
      time: '10.00 AM'
    };
    setAppointments([sampleAppointment]);
  };

  const clearPets = () => {
    setPets([]);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <div className="customer-area">
      <div className="welcome-section">
        <h1>Hola, Cliente</h1>
        <div className="user-actions">
          <span>Tu área | Cerrar sesión</span>
        </div>
      </div>

      <div className="customer-content">
        {/* Sección de mascotas (izquierda) */}
        <section className="pets-section">
          <div className="section-header">
            <h2>Mis mascotas</h2>
            <div className="sample-controls">
              <button onClick={addSamplePet} className="btn-sample">Añadir mascotas de muestra</button>
              <button onClick={clearPets} className="btn-clear">Eliminar todas</button>
            </div>
          </div>

          {pets.length === 0 ? (
            <div className="empty-state">
              <p>No tienes mascotas registradas</p>
              <button className="btn-primary">Añadir nueva mascota</button>
            </div>
          ) : (
            <div className="pets-grid">
              {pets.map(pet => (
                <div key={pet.id} className="pet-card">
                  <h3>{pet.name}</h3>
                  <p><strong>Tratamiento actual:</strong> {pet.treatment}</p>
                  <button className="btn-secondary">Ver ficha</button>
                </div>
              ))}
              <button className="add-pet-card">
                <span>+</span>
                <p>Añadir nueva mascota</p>
              </button>
            </div>
          )}
        </section>

        {/* Sección de citas (derecha) */}
        <section className="appointments-section">
          <div className="section-header">
            <h2>Mis citas</h2>
            <div className="sample-controls">
              <button onClick={addSampleAppointment} className="btn-sample">Añadir cita de muestra</button>
              <button onClick={clearAppointments} className="btn-clear">Eliminar todas</button>
            </div>
          </div>

          {appointments.length === 0 ? (
            <div className="empty-state">
              <p>No tienes citas programadas</p>
              <button className="btn-primary">Pedir nueva cita</button>
            </div>
          ) : (
            <div className="appointments-content">
              <div className="next-appointment">
                <h3>Próxima cita</h3>
                <div className="appointment-card">
                  <p><strong>Mascota:</strong> {appointments[0].petName}</p>
                  <p><strong>Fecha:</strong> {appointments[0].date}</p>
                  <p><strong>Hora:</strong> {appointments[0].time}</p>
                </div>
              </div>
              <button className="btn-primary">Pedir nueva cita</button>
            </div>
          )}
        </section>

        {/* Información de contacto (abajo, ancho completo) */}
        <section className="contact-info">
          <div className="emergency-contact">
            <h3>Urgencias</h3>
            <p className="emergency-phone">666999666</p>
          </div>
          <div className="address">
            <h3>Dirección</h3>
            <p>c/ Bonifacio Cobacho 32, Gijón</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomerArea;