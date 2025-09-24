import React, { useState } from "react";
import "./AppointmentPage.css";

const AppointmentsPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [consultationType, setConsultationType] = useState("");
    const [reason, setReason] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    const pets = ["Firulais", "Mishi", "Rocky"]; // Esto vendrá de la base de datos
    const consultationTypes = ["Consulta estándar", "Urgencia", "Peluquería"];
    const times = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "16:30", "18:00"];

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        pet: selectedPet,
        consultationType,
        reason,
        date: selectedDate,
        time: selectedTime,
    });
    alert("Cita confirmada!");
    };

    return (
        <div className="appointments">
            <h1 className="appointments__title">Sistema de Gestión de Citas Online</h1>

            <div className="appointments__container">
                <div className="appointments__instructions">
                    <h2 className="appointments__instructions-title">¿Cómo funciona?</h2>
                    <ol className="appointments__instructions-list">
                        <li>Selecciona las opciones correctas en los desplegables.</li>
                        <li>Elige una fecha y hora.</li>
                        <li>Confirma tu cita.</li>
                    </ol>
                    
                    <p className="appointments__instructions-note">Si tienes varias mascotas debes pedir una cita para cada mascota.</p>
            </div>

        
        <form className="appointments__form" onSubmit={handleSubmit}>
            <div className="appointments__form-row">
                <select className="appointments__select" value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
                    <option value="">Mascota</option>
                        {pets.map((pet) => (
                    <option key={pet} value={pet}>
                        {pet}
                    </option>
                    ))}
                </select>

                <select className="appointments__select" value={consultationType} onChange={(e) => setConsultationType(e.target.value)}>
                    <option value="">Tipo de consulta</option>
                        {consultationTypes.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
                </select>

                <input className="appointments__input" type="text" placeholder="Motivo (Ej: Vacunación anual)" value={reason} onChange={(e) => setReason(e.target.value)}/>
            </div>

            <div className="appointments__calendar">
                <h3>Septiembre 2025</h3>
                <div className="appointments__calendar-days">
                    {[...Array(30)].map((_, i) => (
                    <button key={i + 1} type="button" className={`appointments__day ${selectedDate === i + 1 ? "appointments__day--selected" : ""
                    }`}
                    onClick={() => setSelectedDate(i + 1)}>
                    {i + 1}
                    </button>
                ))}
                </div>
            </div>

            <div className="appointments__times">
            {times.map((time) => (
                <button
                    key={time}
                    type="button"
                    className={`appointments__time ${
                        selectedTime === time ? "appointments__time--selected" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                >
                    {time}
                </button>
                ))}
            </div>

            <button type="submit" className="appointments__submit">Confirmar cita</button>
        </form>
        </div>
    </div>
    );
};

export default AppointmentsPage;