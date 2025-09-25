import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Table from "../../../components/table/Table";

export const PatientList = () => {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        const fetchPacientes = async () => {
          const response = await fetch("http://localhost:8080/api/v1/patients");
          const data = await response.json();
          setPacientes(data);
        };
        fetchPacientes();
      }, []);

      const columnasPacientes = [
        { header: "Id", accessor: "id" },
        { header: "Familia", accessor: "familia" },
        { header: "Nombre", accessor: "nombre" },
        { header: "Raza", accessor: "raza" },
        { header: "Dueño", accessor: "duenio" },
        { header: "Contacto", accessor: "contacto" },
        {
            header: "Detalles",
            render: (fila) => (
              <Link to={`/pacientes/${fila.id}`} className="leer-mas">
                Leer más
              </Link>
            )
          }
      ];

      const datosEjemplo = [
        {
          id: 1,
          familia: "Canino",
          nombre: "Bobby",
          raza: "Labrador",
          duenio: "Juan Pérez",
          contacto: "555-1234",
          detalles: "Leer más",
        },
        {
          id: 2,
          familia: "Felino",
          nombre: "Mishi",
          raza: "Siames",
          duenio: "Ana López",
          contacto: "555-5678",
          detalles: "Leer más",
        },
    ]

    return (
        <>
        <Hero text="Listado de pacientes"></Hero>
        <span>
            <Button text="+ Crear nuevo"></Button>
            <Button></Button>
        </span>
        <Table columnas={columnasPacientes} data={datosEjemplo}></Table>
        </>
    )
}

export default PatientList