import React from "react";
import Button from "../../../components/button/Button";
import Hero from "../../../components/hero/Hero";
import Square from "../../../components/square/Square";
import InfoCard from "../../../components/infoCard/InfoCard";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";

import { useParams } from "react-router-dom";
import "./AppointmentDetails.css"


export const AppointmentDetails = () => {

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

  /*const { id } = useParams(); // saca el id de la URL /pacientes/:id*/
  /* const [tratamiento, setTratamiento] = useState(null); 

useEffect(() => {
  const fetchTratamiento = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/patients/${id}`);
      const data = await response.json();
      setTratamiento(data);
    } catch (err) {
      console.error("Error cargando paciente:", err);
    }
  };
  fetchTratamiento();
}, [id]);

if (!tratamiento) return <p>Cargando paciente...</p>; */

// 🔹 Datos de ejemplo
const tratamiento = {
  nombre: "22/04/24 Parvovirus",
  desparasitacion: "Interna y externa",
  descripción: "Animal sano",
};

// Definimos qué campos queremos mostrar
const tratamientoFields = [
  { label: "Vacunas", key: "nombre" },
  { label: "Desparasitación", key: "desparasitacion" },
  { label: "Diagnóstico", key: "descripción" },
];
return (
    <>
    <Hero text="Datos de cita"></Hero>
    <Square>
        <PageSubTitle text="Datos del paciente"></PageSubTitle>
        <InfoCard data={paciente} fields={patientFields}></InfoCard>
        <PageSubTitle text="Resumen de paciente"></PageSubTitle>
        <InfoCard data={tratamiento} fields={tratamientoFields}></InfoCard>
    </Square>
    <div className="button-container">
        <Button text="Añadir tratamiento" type="primary"></Button>
    </div>
    </>
)
}

export default AppointmentDetails