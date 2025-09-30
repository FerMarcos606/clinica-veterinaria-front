import React, { useState, useEffect } from 'react';
import './CustomerArea.css';
import { useAuth } from '../../context/AuthContext';
import pacientsService from '../../services/pacients/PacientsService';
import appointmentsService from '../../services/appointments/AppointmentsService';
import { Link } from 'react-router';

const CustomerArea = () => {
  const { user } = useAuth();
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchPetsAndAppointments = async () => {
    setError(null);

    try {
    
      const userId = localStorage.getItem('userId');

      if (!userId) {
        console.error("No se encontró el userId en localStorage");
        setError("Error: usuario no autenticado");
        return;
      }

 
      const userPets = await pacientsService.getPatientsByUserId(userId);
      setPets(userPets);


      const myAppointments = await appointmentsService.getMyAppointments(userId);
      setAppointments(myAppointments);

    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      setError("No se pudieron cargar tus datos. Inténtalo nuevamente.");
    }
  };

  fetchPetsAndAppointments();
}, []); 

  return (
    <div className="customer-area">
      <div className="welcome-section">
        <h1>Hola, {user ? user.name : 'Cliente'}</h1>
        <div className="user-actions">
          <span>Tu área | Cerrar sesión</span>
        </div>
      </div>

      <div className="customer-content">
        <section className="pets-section">
          <div className="section-header">
            <h2>Mis mascotas</h2>
          </div>

          {pets.length === 0 ? (
            <div className="empty-state">
              <p>No tienes mascotas registradas</p>
              <Link to="/crear-paciente" className='btn-primary'>Añadir nueva mascota</Link>
            </div>
          ) : (
            <div className="pets-grid">
              {pets.map(pet => (
                <div key={pet.id_patient} className="pet-card">
                  <h3>{pet.name}</h3>
                  <p><strong>Tratamiento actual:</strong> {pet.treatment || 'Ninguno'}</p>
                  <button className="btn-secondary">Ver ficha</button>
                </div>
              ))}
              <Link to="/crear-paciente" className='add-pet-card'>+ Añadir mascota</Link>
            </div>
          )}
        </section>

        <section className="appointments-section">
          <div className="section-header">
            <h2>Mis citas</h2>
          </div>

          {error ? (
            <div className="error-message">{error}</div>
          ) : appointments.length === 0 ? (
            <div className="empty-state">
              <p>No tienes citas programadas</p>
              <button className="btn-primary">Pedir nueva cita</button>
            </div>
          ) : (
            <div className="appointments-content">
              {appointments.map(appointment => (
                <div className="appointment-card" key={appointment.id_appointment}>
                  <p><strong>Mascota:</strong> {appointment.patientName}</p>
           <p><strong>Fecha:</strong> {new Date(appointment.appointmentDatetime).toLocaleDateString()}</p>
<p><strong>Hora:</strong> {new Date(appointment.appointmentDatetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              ))}
              <button className="btn-primary">Pedir nueva cita</button>
            </div>
          )}
        </section>

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
