import React from "react";
import { Link } from "react-router-dom";
import Pets from "../../../assets/imgs/banner.png"; 
import './HomePageAdmin.css'

export const HomePageAdmin = () => {
    
    return (
        <>
        <main className="main">
        {/* Sección Hero */}
        <section className="main__hero">
            <div className="main__hero-text">
            <h1>Bienvenida<br /> Margarita</h1>
            </div>
            <div className="main__hero-image">
            <img src={Pets} alt="Patas de mascota" />
            </div>
        </section>
        </main>
        <h2>¿Qué quieres hacer?</h2>
            <div className="home-admin-options">
            <div className="home-admin-option">
            <img src="" alt="Pacientes" className="home-admin-icon" />
            <Link to="/patients" className="home-admin-link">
                Ver lista de pacientes
            </Link>
            </div>

            <div className="home-admin-option">
            <img src="" alt="Agenda" className="home-admin-icon" />
            <Link to="/agenda" className="home-admin-link">
                Tu agenda
            </Link>
            </div>
        </div>

        
        </>
    )
}

export default HomePageAdmin