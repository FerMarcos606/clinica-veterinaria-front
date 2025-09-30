import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Square from "../../../components/square/Square";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";
import InfoCard from "../../../components/infoCard/InfoCard";
import pacientsService from "../../../services/pacients/PacientsService";
import userService from "../../../services/user/UserService";
import { useNavigate } from "react-router-dom";


export const PatientDetails = () => {
  const { id } = useParams();
  const [paciente, setPaciente] = useState(null);
  const [tutor, setTutor] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleDelete = async () => {
  if (!window.confirm("¿Seguro que deseas eliminar este paciente? Esta acción no se puede deshacer.")) {
    return;
  }

  try {
    await pacientsService.deletePatient(id);
    alert("Paciente eliminado con éxito");
    navigate("/listaPacientes");
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    alert("Ocurrió un error al eliminar el paciente.");
  }
};

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const patientData = await pacientsService.getPatientById(id);
        setPaciente(patientData);

        if (patientData && patientData.user_id) {
          const tutorData = await userService.getUserById(patientData.user_id);
          setTutor(tutorData);
          console.log("Tutor del paciente:", tutorData);
        }
      } catch (err) {
        setError("Error al cargar los detalles del paciente.");
        console.error("Error cargando detalles del paciente:", err);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!paciente) {
    return <p>Cargando paciente...</p>;
  }
  
  const patientFields = [
    { label: "Nº de identificación", key: "id_patient" },
    { label: "Nombre", key: "name" },
    { label: "Edad", key: "age" },
    { label: "Especie", key: "family" },
    { label: "Raza", key: "breed" },
    { label: "Sexo", key: "sex" },
  ];

  const tutorFields = [
    { label: "Nombre", key: "name" },
    { label: "Apellido", key: "surname" },
    { label: "Teléfono", key: "phone" },
    { label: "DNI", key: "dni" },
    { label: "Correo electrónico", key: "email" },
  ];

  return (
    <>
      <Hero text="Detalles del Paciente" />
            <Link to="/crear-paciente" state={{ patient: paciente }}>
        <Button text="Editar" />
      </Link>
<Button text="Eliminar" type="danger" onClick={handleDelete} />
      <Square>
        <PageSubTitle text="Datos del paciente" />
        <InfoCard data={paciente} fields={patientFields} />
        {tutor && (
          <>
            <PageSubTitle text="Datos del dueño" />
            <InfoCard data={tutor} fields={tutorFields} />
          </>
        )}
        {/* Placeholder for other sections */}
        <PageSubTitle text="Historia clínica" />
        <InfoCard data={{}} fields={[]} />
        <PageSubTitle text="Consultas" />
        <InfoCard data={{}} fields={[]} />
      </Square>
    </>
  );
};

export default PatientDetails;
