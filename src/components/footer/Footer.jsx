import "./Footer.css";

import facebookIcon from "../../assets/imgs/facebook.png";
import instagramIcon from "../../assets/imgs/instagram.png";
import clockIcon from "../../assets/imgs/clock.png";
import telephoneIcon from "../../assets/imgs/telephone.png";
import pinIcon from "../../assets/imgs/pin.png";
import logoIcon from "../../assets/imgs/logo.png";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Primera fila */}
        <div className="footer__top">
          
          {/* Columna 1: Logo + contacto */}
          <div className="footer__col">
            <img src={logoIcon} alt="Logotipo" className="footer__logo" />

            <h3 className="footer__title">Clínica</h3>
            <div className="footer__item">
              <img src={telephoneIcon} alt="Teléfono" className="footer__icon" />
              <p className="footer__text">984 22 15 62</p>
            </div>

            <h3 className="footer__title">Urgencias</h3>
            <div className="footer__item">
              <img src={telephoneIcon} alt="Teléfono urgencias" className="footer__icon" />
              <p className="footer__text">66 69 99 666</p>
            </div>

            <h3 className="footer__title">Dirección</h3>
            <div className="footer__item">
              <img src={pinIcon} alt="Ubicación" className="footer__icon" />
              <p className="footer__text">Calle Ejemplo 123</p>
            </div>
          </div>

          {/* Columna 2: Información */}
          <div className="footer__col">
            <h2 className="footer__heading">Información</h2>
            <a href="/equipo" className="footer__link">Nuestro Equipo</a>
            <a href="/consejos" className="footer__link">Consejos Útiles</a>
            <p className="footer__link">margarita@gmail.com</p>
          </div>

          {/* Columna 3: Redes + horarios */}
          <div className="footer__col">
            <div className="footer__icons">
              <img src={facebookIcon} alt="Facebook" className="footer__icon" />
              <img src={instagramIcon} alt="Instagram" className="footer__icon" />
            </div>
            <div className="footer__item">
              <img src={clockIcon} alt="Reloj" className="footer__icon" />
              <p className="footer__text">Horario:</p>
            </div>
            <p className="footer__time">Lunes a Viernes de 9:00h a 19:00h</p>
            <p className="footer__time">Sábados de 10:00h a 18:00h</p>
            <p className="footer__time">Domingos: 10:00h a 13:00h</p>
          </div>
        </div>

        {/* Segunda fila */}
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
}

