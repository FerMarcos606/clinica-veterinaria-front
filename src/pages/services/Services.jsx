import React, { useState } from "react";
import "./Services.css";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import Analisis from "../../assets/imgs/analisis-clinicos.png"
import Hospital from "../../assets/imgs/hospital.png"
import Medicina from "../../assets/imgs/medicina-preventiva.png"
import Servicio from "../../assets/imgs/servicio-peluqueria.png"

const Services = () => {
    

    return (
        <>
        <Hero text="Servicios"></Hero>
        <div className="card-container">
            <Card imagen={Analisis} title="Análisis clínicos" text="Tenemos un laboratorio  completo
            para realizar hemogramas y bioquímicas en 15 minutos."></Card>
            <Card imagen={Hospital} title="Hospital" text="Tus perritos y gatitos se pueden quedar a 
            dormir si lo necesitan."></Card>
            <Card imagen={Medicina} title="Medicina preventiva" text="Realizamos planes veterinarios
            para cachorros, pautas de vacunación, limpiezas, chequeos."></Card>
            <Card imagen={Servicio} title="Peluquería" text="Cuidamos del pelaje y piel de tu mascota, 
            con productos de calidad y técnicas de peluquería profesional."></Card>
        </div>
        </>
    );
};

export default Services;