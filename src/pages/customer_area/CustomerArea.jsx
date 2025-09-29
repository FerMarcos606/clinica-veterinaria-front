import React, { useState, useEffect } from 'react';
import './CustomerArea.css';
import { useAuth } from '../../context/AuthContext';
import pacientsService from '../../services/pacients/PacientsService';
import appointmentsService from '../../services/appointments/AppointmentsService';

const CustomerArea = () => {
  const { user } = useAuth();
  const [pets, setPets] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetsAndAppointments = async () => {
      setError(null);
      try {
        const userPets = await pacientsService.getPatientsByUserId(user?.id);
        setPets(userPets);
      } catch (error) {
        console.error("Error fetching user's pets:", error);
      }
      try {
        const myAppointments = await appointmentsService.getMyAppointments();
        setAppointments(myAppointments);
      } catch (error) {
        console.error("Error fetching user's appointments:", error);
        setError("No se pudieron cargar las citas. Por favor, inténtelo de nuevo más tarde.");
      }
    };

    if (user) {
      fetchPetsAndAppointments();
    }
  }, [user]);

  return (
    <div className="customer-area">
      <div className="welcome-section">
        <h1>Hola, {user ? user.name : 'Cliente'}</h1>
        <div className="user-actions">
          <span>Tu área | Cerrar sesión</span>
        </div>
      </div>

      <div className="customer-content">
        {/* Sección de mascotas (izquierda) */}
        <section className="pets-section">
          <div className="section-header">
            <h2>Mis mascotas</h2>
          </div>

          {pets.length === 0 ? (
            <div className="empty-state">
              <p>No tienes mascotas registradas</p>
              <button className="btn-primary">Añadir nueva mascota</button>
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
