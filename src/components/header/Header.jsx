import React, { useState } from "react";
import logo from "../../assets/logos/MargaritaLogo.png";
import iconInicioSesion from "../../assets/icons/IconInicioSesion.png";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <header className="header">
        <div className="header__logo">
            <img src={logo} alt="Logo Margarita" className="header__logo-image" />
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
            <ul className="header__list">
                <li className="header__item">
                    <a href="#inicio" className="header__link">Inicio</a>
                </li>
                <li className="header__item">
                    <a href="#quienes-somos" className="header__link">Quiénes somos</a>
                </li>
                <li className="header__item">
                    <a href="#servicios" className="header__link">Servicios</a>
                </li>
                <li className="header__item">
                    <a href="#contacto" className="header__link">Contacto</a>
                </li>
            </ul>
        </nav>

        
        <div className="header__login">
            <img src={iconInicioSesion} alt="Iniciar sesión" className="header__login-icon"
            />
        </div>

        
        <button className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
        </button>
    </header>
    );
};

export default Header;