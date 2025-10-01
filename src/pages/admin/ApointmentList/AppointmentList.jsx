import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import appointmentsService from "../../../services/appointments/AppointmentsService";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Table from "../../../components/table/Table";
import "./AppointmentList.css";

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentsService.getAppointments();
        setAppointments(data);
      } catch (error) {
        console.error("Error al obtener citas:", error);
      }
    };

    fetchAppointments();
  }, []);

  const columnasCitas = [
    { header: "Fecha", render: (fila) => formatDate(fila.appointmentDatetime) },
    { header: "Hora", render: (fila) => formatTime(fila.appointmentDatetime) },
    { header: "Paciente", accessor: "patientName" },
    {
      header: "Tipo de consulta",
      render: (fila) => (fila.type ? "Sí" : "No"), 
    },
    { header: "Motivo", accessor: "reason" },
    {
      header: "Dueño",
      render: (fila) => fila.userEmail || "Sin asignar",
    },
    {
      header: "Estado",
      render: (fila) => renderStatusButton(fila),
    },
  ];


  const formatDate = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
  };


  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  };

  const renderStatusButton = (fila) => {
    if (fila.status === "PENDIENTE") {
      return (
        <button
          className="estado-btn atender"
          onClick={() => navigate(`/atender-cita/${fila.id_appointment}`)}
        >
          Atender
        </button>
      );
    } else if (fila.status === "ATENDIDA") {
      return <span className="estado-label atendida">Atendida</span>;
    } else if (fila.status === "PASADA") {
      return <span className="estado-label pasada">Pasada</span>;
    } else {
      return <span className="estado-label">{fila.status}</span>;
    }
  };


  const filteredAppointments = appointments.filter((a) =>
    Object.values(a).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Hero text="Agenda" />

      <div className="functional-section">
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link to="/crear-cita">
            <Button text="+ Crear cita" type="secondary" />
          </Link>
          <SearchBar
            placeholder="Buscar cita..."
            onSearch={(value) => setSearchTerm(value)}
          />
        </span>
      </div>

      <div className="divider-div">
        <hr className="divider" />
      </div>

      <Table columnas={columnasCitas} data={filteredAppointments} />
    </>
  );
};


const renderStatusButtonCSS = `
.estado-btn.atender {
  background-color: #8fcf8f;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  color: #1e4620;
  font-weight: 600;
  transition: background 0.2s ease;
}

.estado-btn.atender:hover {
  background-color: #75b875;
}

.estado-label {
  border-radius: 6px;
  padding: 6px 12px;
  font-weight: 600;
  display: inline-block;
}

.estado-label.atendida {
  background-color: #d1f0d1;
  color: #2f5d2f;
}

.estado-label.pasada {
  background-color: #e0e0e0;
  color: #666;
}
`;


if (!document.getElementById("appointment-status-css")) {
  const style = document.createElement("style");
  style.id = "appointment-status-css";
  style.innerHTML = renderStatusButtonCSS;
  document.head.appendChild(style);
}

export default AppointmentList;