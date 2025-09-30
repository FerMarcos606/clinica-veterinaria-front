import React, { useState, useEffect } from "react";
import Button from "../../../components/button/Button";
import Hero from "../../../components/hero/Hero";
import Square from "../../../components/square/Square";
import InfoCard from "../../../components/infoCard/InfoCard";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";
import pacientsService from "../../../services/pacients/PacientsService";
import Modal from "../../../components/modal/Modal";
import appointmentsService from "../../../services/appointments/AppointmentsService";
import { useParams, Link } from "react-router-dom";
import "./AppointmentDetails.css"


export const AppointmentDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paciente, setPaciente] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams(); // id = id_appointment

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ Primero obtenemos los datos de la cita
        const appointmentData = await appointmentsService.getAppointmentById(id);
        setAppointment(appointmentData);

        // 2️⃣ Luego obtenemos el paciente asociado
        if (appointmentData?.patientId) {
          const patientData = await pacientsService.getPatientById(appointmentData.patientId);
          setPaciente(patientData);
        } else {
          throw new Error("La cita no contiene un patientId válido.");
        }
      } catch (err) {
        console.error("Error cargando los datos:", err);
        setError("Error al cargar los detalles de la cita o del paciente.");
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

  const tratamiento = {
    nombre: "22/04/24 Parvovirus",
    desparasitacion: "Interna y externa",
    descripción: "Animal sano",
  };

  const tratamientoFields = [
    { label: "Vacunas", key: "nombre" },
    { label: "Desparasitación", key: "desparasitacion" },
    { label: "Diagnóstico", key: "descripción" },
  ];

  return (
    <>
      <Hero text="Datos de cita" />

      <Square>
        <PageSubTitle text="Datos del paciente" />
        <InfoCard data={paciente} fields={patientFields} />

        <PageSubTitle text="Resumen del paciente" />
        <InfoCard data={tratamiento} fields={tratamientoFields} />
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