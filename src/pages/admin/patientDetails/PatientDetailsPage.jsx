import React from "react";
import Hero from "../../../components/hero/Hero";
import Button from "../../../components/button/Button";
import Square from "../../../components/square/Square";
import PageSubTitle from "../../../components/pageSubTitle/PageSubTitle";

export const PatientDetails = () => {
    return (
        <>
        <Hero text="Detalles"></Hero>
        <Button text="Editar"></Button>
        <Button text="Eliminar" type="danger"></Button>
        <Square>
            <PageSubTitle text="Datos del paciente"></PageSubTitle>
            <PageSubTitle text="Datos del dueño"></PageSubTitle>
            <PageSubTitle text="Historia clínica"></PageSubTitle>
        </Square>
        </>
    )
}

export default PatientDetails