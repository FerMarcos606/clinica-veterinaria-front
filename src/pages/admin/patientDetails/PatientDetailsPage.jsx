import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Square from "../../../components/square/Square";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";
import InfoCard from "../../../components/infoCard/InfoCard";

export const PatientDetails = () => {

    const { id } = useParams(); // saca el id de la URL /pacientes/:id
    /* const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    const fetchPaciente = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/patients/${id}`);
        const data = await response.json();
        setPaciente(data);
      } catch (err) {
        console.error("Error cargando paciente:", err);
      }
    };
    fetchPaciente();
  }, [id]);

  if (!paciente) return <p>Cargando paciente...</p>; */

  // 🔹 Datos de ejemplo
  const paciente = {
    id: "0002",
    nombre: "Calipso",
    edad: "3 años",
    especie: "Perro",
    raza: "Bóxer",
    sexo: "Macho"
  };

  // Definimos qué campos queremos mostrar
  const patientFields = [
    { label: "Nº de identificación", key: "id" },
    { label: "Nombre", key: "nombre" },
    { label: "Edad", key: "edad" },
    { label: "Especie", key: "especie" },
    { label: "Raza", key: "raza" },
    { label: "Sexo", key: "sexo" }
  ];

  /*Tutor*/

  /* 
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/`); Comprobar endpoint
        const data = await response.json();
        setTutor(data);
      } catch (err) {
        console.error("Error cargando dueño:", err);
      }
    };
    fetchTutor();
  }, [id]);

  if (!tutor) return <p>Cargando datos del dueño...</p>; */

  // 🔹 Datos de ejemplo
  const tutor = {
    nombre: "Jack",
    apellido: "Sparrow",
    telefono: 928913941,
    DNI: "28374987Q",
    correo: "capitanjack@gmail.com",
  };

  // Definimos qué campos queremos mostrar
  const tutorFields = [
    { label: "Nombre", key: "nombre" },
    { label: "Apellido", key: "apellido" },
    { label: "Teléfono", key: "telefono" },
    { label: "DNI", key: "DNI" },
    { label: "Correo electrónico", key: "correo" },
  ];

  /*Tratamiento*/

  /* 
  const { id } = useParams();
  const [tratamiento, setTratamiento] = useState(null);

  useEffect(() => {
    const fetchTratamiento = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/`); Comprobar endpoint
        const data = await response.json();
        setTratamiento(data);
      } catch (err) {
        console.error("Error cargando tratamiento:", err);
      }
    };
    fetchTratamiento();
  }, [id]);

  if (!tratamiento) return <p>Cargando datos del tratamiento...</p>; */

  // 🔹 Datos de ejemplo
  const tratamiento = {
    nombre: "Vacunación obligatoria",
    descripcion: "Vacuna antirábica",
    fecha: "25-09-2025",
  };

  // Definimos qué campos queremos mostrar
  const tratamientoFields = [
    { label: "Nombre", key: "nombre" },
    { label: "Descripción", key: "descripcion" },
    { label: "Fecha", key: "fecha" },
  ];

  /*Consulta*/

  /* 
  const { id } = useParams();
  const [consulta, setConsulta] = useState(null);

  useEffect(() => {
    const fetchConsulta = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/`); Comprobar endpoint
        const data = await response.json();
        setConsulta(data);
      } catch (err) {
        console.error("Error cargando antiguas consultas:", err);
      }
    };
    fetchConsulta();
  }, [id]);

  if (!consulta) return <p>Cargando antiguas consultas...</p>; */

  // 🔹 Datos de ejemplo
  const consulta = {
    fecha: "25-09-2025",
    descripcion: "Vacuna antirábica",
    nombre: "Vacunación obligatoria",
  };

  // Definimos qué campos queremos mostrar
  const consultaFields = [
    { label: "Fecha", key: "fecha" },
    { label: "Motivo", key: "descripcion" },
    { label: "Tratamiento", key: "nombre" },
  ];
    return (
        <>
        <Hero text="Detalles"></Hero>
        <Button text="Editar"></Button>
        <Button text="Eliminar" type="danger"></Button>
        <Square>
            <PageSubTitle text="Datos del paciente"></PageSubTitle>
            <InfoCard data={paciente} fields={patientFields}></InfoCard>
            <PageSubTitle text="Datos del dueño"></PageSubTitle>
            <InfoCard data={tutor} fields={tutorFields}></InfoCard>
            <PageSubTitle text="Historia clínica"></PageSubTitle>
            <InfoCard data={tratamiento} fields={tratamientoFields}></InfoCard>
            <PageSubTitle text="Consultas"></PageSubTitle>
            <InfoCard data={consulta} fields={consultaFields}></InfoCard>
        </Square>
        </>
    )
}

export default PatientDetails