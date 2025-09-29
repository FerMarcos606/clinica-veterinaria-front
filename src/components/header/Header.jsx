import React, { useState } from "react";
import logo from "../../assets/logos/MargaritaLogo.png";
import iconInicioSesion from "../../assets/icons/IconInicioSesion.png";
import "./Header.css";
import LoginModal from "../login_modal/LoginModal";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);

    return (
        <>
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
                    {isAuthenticated ? (
                        <button onClick={logout} className="header__login-button">
                            Cerrar Sesión
                        </button>
                    ) : (
                        <button onClick={openLoginModal} className="header__login-button">
                            <img src={iconInicioSesion} alt="Iniciar sesión" className="header__login-icon" />
                        </button>
                    )}
                </div>

                <button className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
            </header>

            {!isAuthenticated && (
                <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={closeLoginModal}
                />
            )}
        </>
    );
};

export default Header;