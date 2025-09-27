import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Table from "../../../components/table/Table";
import SearchBar from "../../../components/searchBar/SearchBar";
import './PatientListPage.css'
import pacientsService from "../../../services/pacients/PacientsService";

export const PatientList = () => {
    const [pacientes, setPacientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 

       useEffect(() => {
        const fetchPacientes = async () => {
          const data = await pacientsService.getPatients();
          setPacientes(data);
        };
        fetchPacientes();
      }, []);

      const columnasPacientes = [
        { header: "Id", accessor: "id_patient" },
        {header: "Nº Identificación", accessor: "identificationNumber"},
        { header: "Nombre", accessor: "name" },
        { header: "Edad", accessor: "age" },
        { header: "Familia", accessor: "family" },
        { header: "Raza", accessor: "breed" },
        { header: "Sexo", accessor: "sex" },
        { header: "Dueño", accessor: "tutor" },
        
        {
            header: "Detalles",
            render: (fila) => (
              <Link to={`/pacientes/${fila.id_patient}`} className="leer-mas">
                Leer más
              </Link>
            )
          }
      ];

    const dataToShow = pacientes;

      



     // 👇 Filtrar según búsqueda
    const filteredData = dataToShow.filter((p) =>
        Object.values(p).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <>
        <Hero text="Listado de pacientes"></Hero>
        <div className="functional-section">
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button text="+ Crear nuevo" type="secondary"></Button>
            <SearchBar
            placeholder="Buscar paciente..."
            onSearch={(value) => setSearchTerm(value)}
            />
            <Button></Button>
        </span>
        </div>
        <div className="divider-div">
            <hr className="divider" />
        </div>
        

        <Table columnas={columnasPacientes} data={filteredData}></Table>
        </>
    )
}

export default PatientList