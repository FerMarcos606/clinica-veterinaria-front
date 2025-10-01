import React, { useState, useEffect } from "react";
import Button from "../../../components/button/Button";
import Hero from "../../../components/hero/Hero";
import Square from "../../../components/square/Square";
import InfoCard from "../../../components/infoCard/InfoCard";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";
import pacientsService from "../../../services/pacients/PacientsService";
import Modal from "../../../components/modal/Modal";
import appointmentsService from "../../../services/appointments/AppointmentsService";
import treatmentsService from "../../../services/treatments/TreatmentsService";
import { useParams, Link } from "react-router-dom";
import "./AppointmentDetails.css"


export const AppointmentDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paciente, setPaciente] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [treatments, setTreatments] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {

        const appointmentData = await appointmentsService.getAppointmentById(id);
        setAppointment(appointmentData);

  
        if (appointmentData?.patientId) {
          const patientData = await pacientsService.getPatientById(appointmentData.patientId);
          setPaciente(patientData);
          const treatmentsData = await treatmentsService.getTreatmentsByPatientId(appointmentData.patientId);
          setTreatments(treatmentsData);
        } else {
          throw new Error("La cita no contiene un patientId válido.");
        }
      } catch (err) {
        console.error("Error cargando los datos:", err);
        setError("Error al cargar los detalles de la cita, del paciente o de los tratamientos.");
      }
    };

    fetchData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!appointment || !paciente) return <p>Cargando datos...</p>;

  const patientFields = [
    { label: "Nº de identificación", key: "identificationNumber" },
    { label: "Nombre", key: "name" },
    { label: "Edad", key: "age" },
    { label: "Familia", key: "family" },
    { label: "Raza", key: "breed" },
    { label: "Sexo", key: "sex" },
  ];

  const treatmentFields = [
    { label: "Nombre", key: "name" },
    { label: "Descripción", key: "description" },
    { label: "Fecha", key: "treatmentDate" },
  ];

  return (
    <>
      <Hero text="Datos de cita" />

      <Square>
        <PageSubTitle text="Datos del paciente" />
        <InfoCard data={paciente} fields={patientFields} />

        <PageSubTitle text="Resumen de tratamientos" />
        {treatments.length > 0 ? (
          treatments.map((treatment) => (
            <InfoCard key={treatment.id} data={treatment} fields={treatmentFields} />
          ))
        ) : (
          <p>No hay tratamientos para este paciente.</p>
        )}
      </Square>

      <div className="button-container">
        <Button
          text="Añadir tratamiento"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={() => console.log("Tratamiento guardado")}
      />
    </>
  );
};

export default AppointmentDetails;