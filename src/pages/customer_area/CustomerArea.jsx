import React, { useState, useEffect } from 'react';
import './CustomerArea.css';
// import { useAuth } from '../../context/AuthContext';
import pacientsService from '../../services/pacients/PacientsService';
import appointmentsService from '../../services/appointments/AppointmentsService';
import { Link } from 'react-router';
import Hero from '../../components/hero/Hero';
import Button from '../../components/button/Button';


const CustomerArea = () => {
  // const { user } = useAuth();
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
    <>
          <Hero text="Área personal" />
    <div className="customer-area">
      
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
                  <h3 className='pet-name'>{pet.name}</h3>
                  <img src={pet.image} alt="Mascota" className="pet-image"></img>
                  <div className='btn-container'>
                     <Link to={`/detallePaciente/${pet.id_patient}`} className="btn-secondary">Ver ficha</Link>
                    </div>
                 
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
              <Link to="/citas" className="btn-primary">Pedir nueva cita</Link>
            </div>
          ) : (
            <div className="appointments-content">
              {appointments.map(appointment => (
                <div className="appointment-card" key={appointment.id_appointment}>
                  <p><strong>Mascota:</strong> {appointment.patientName}</p>
           <p><strong>Fecha:</strong> {new Date(appointment.appointmentDatetime).toLocaleDateString()}</p>
<p><strong>Hora:</strong> {new Date(appointment.appointmentDatetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <Button text = "Anular"></Button>
                </div>
              ))}
            <Link to="/citas" className="btn-primary">Pedir nueva cita</Link>
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
};

export default CustomerArea;
