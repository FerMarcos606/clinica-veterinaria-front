// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

// Importar los iconos/imagenes
import IconTelephone from "../../assets/imgs/telephone.png";
import IconPin from "../../assets/imgs/pin.png";
import IconLogo from "../../assets/imgs/logo.png";
import IconInstagram from "../../assets/imgs/instagram.png";
import IconFacebook from "../../assets/imgs/facebook.png";
import IconClock from "../../assets/imgs/clock.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">

          {/* Columna 1: Logo */}
          <div className="footer__col">
            <img
              src={IconLogo}
              alt="Logotipo"
              className="footer__logo" 
            />
          </div>

          {/* Columna 2: Datos de contacto */}
          <div className="footer__col">
            <h3 className="footer__title">Clínica</h3>
            <div className="footer__item">
              <img
                src={IconTelephone}
                alt="Teléfono"
                className="footer__image"
              />
              <p className="footer__text">984 22 15 62</p>
            </div>

            <h3 className="footer__title">Urgencias</h3>
            <div className="footer__item">
              <img
                src={IconTelephone}
                alt="Teléfono urgencias"
                className="footer__image"
              />
              <p className="footer__text">66 69 99 666</p>
            </div>

            <h3 className="footer__title">Dirección</h3>
            <div className="footer__item">
              <img
                src={IconPin}
                alt="Ubicación"
                className="footer__image"
              />
              <p className="footer__text">Calle Ejemplo 123</p>
            </div>
          </div>

          {/* Columna 3: Información */}
          <div className="footer__col">
            <h2 className="footer__heading">Información</h2>
            <a href="/equipo" className="footer__link">Nuestro Equipo</a>
            <a href="/consejos" className="footer__link">Consejos Útiles</a>
            <p className="footer__link">margarita@gmail.com</p>
          </div>

          {/* Columna 4: Redes y horarios */}
          <div className="footer__col">
            <div className="footer__icons">
              <img
                src={IconFacebook}
                alt="Facebook"
                className="footer__image"
              />
              <img
                src={IconInstagram}
                alt="Instagram"
                className="footer__image"
              />
            </div>
            <div className="footer__item">
              <img
                src={IconClock}
                alt="Reloj"
                className="footer__image"
              />
              <p className="footer__text">Horario:</p>
            </div>
            <p className="footer__time">Lunes a Viernes de 9:00h a 19:00h</p>
            <p className="footer__time">Sábados de 10:00h a 18:00h</p>
            <p className="footer__time">Domingos: 10:00h a 13:00h</p>
          </div>

        </div>

        {/* Footer inferior */}
        <div className="footer__bottom">
          <div className="footer__col">
            <p className="footer__copy">© 2024 Clínica Veterinaria Margarita</p>
          </div>
          <div className="footer__col footer__legal">
            <a href="/aviso-legal" className="footer__legal-link">Aviso Legal</a>
            <a href="/cookies" className="footer__legal-link">Política de Cookies</a>
            <a href="/privacidad" className="footer__legal-link">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
