import React, { useState } from "react";
import appointmentsService from "../../services/appointments/AppointmentsService";
import "./AppointmentPage.css";

const AppointmentsPage = () => {
    const [isUrgent, setIsUrgent] = useState(false);
    const [reason, setReason] = useState("Vacunación anual");
    const [patientId, setPatientId] = useState("1");
    const [userId, setUserId] = useState("3");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const times = ["09:00", "09:30", "10:00", "10:35", "11:00", "11:30", "16:30", "18:00"];


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!selectedDate || !selectedTime) {
            setError("Por favor, selecciona una fecha y hora.");
            return;
        }

        // Format date and time
        const day = String(selectedDate).padStart(2, '0');
        const month = '09'; // September
        const year = '2025';
        const appointmentDatetime = `${year}-${month}-${day}T${selectedTime}:00`;


        const appointmentData = {
            appointmentDatetime,
            type: isUrgent,
            reason,
            status: "PENDIENTE",
            patientId: parseInt(patientId, 10),
            userId: parseInt(userId, 10),
        };

        try {
            const result = await appointmentsService.createAppointment(appointmentData);
            setSuccess("¡Cita creada con éxito!");
            console.log("Cita creada:", result);
        } catch (error) {
            setError("Error al crear la cita. Por favor, inténtelo de nuevo.");
            console.error("Error al crear la cita:", error);
        }
    };

    return (
        <div className="appointments">
            <h1 className="appointments__title">Sistema de Gestión de Citas Online</h1>

            <div className="appointments__container">
                <div className="appointments__instructions">
                    <h2 className="appointments__instructions-title">¿Cómo funciona?</h2>
                    <ol className="appointments__instructions-list">
                        <li>Rellena los datos del formulario.</li>
                        <li>Elige una fecha y hora.</li>
                        <li>Confirma tu cita.</li>
                    </ol>
                </div>

                <form className="appointments__form" onSubmit={handleSubmit}>
                    <div className="appointments__form-row">
                        <input
                            className="appointments__input"
                            type="text"
                            placeholder="Motivo (Ej: Vacunación anual)"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                    </div>
                     <div className="appointments__form-row">
                        <input
                            className="appointments__input"
                            type="number"
                            placeholder="ID del Paciente"
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                            required
                        />
                        <input
                            className="appointments__input"
                            type="number"
                            placeholder="ID del Usuario"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="appointments__form-row">
                        <label className="appointments__checkbox-label">
                            <input
                                type="checkbox"
                                checked={isUrgent}
                                onChange={(e) => setIsUrgent(e.target.checked)}
                            />
                            ¿Es urgente?
                        </label>
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

                    {success && <p className="appointments__success">{success}</p>}
                    {error && <p className="appointments__error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AppointmentsPage;
