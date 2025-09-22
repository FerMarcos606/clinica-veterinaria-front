import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__logo-container">
          <img src={} alt="logotipo" className="footer__logo" />
        </div>

        <div className="footer__data">
          <h3 className="footer__title">Clínica</h3>
          <img src={} alt="teléfono" className="footer__image" />
          <p className="footer__number">984 22 15 62</p>

          <h3 className="footer__title">Urgencias</h3>
          <img src={} alt="teléfono" className="footer__image" />
          <p className="footer__number">66 69 99 666</p>

          <h3 className="footer__title">Dirección</h3>
          <img src={} alt="pin-google" className="footer__image" />
        </div>

        <div className="footer__information">
          <h2 className="footer__heading">Información</h2>
            <a href="/equipo" className="footer__link">Nuestro Equipo</a>
            <a href="/consejos" className="footer__link">Consejos Útiles</a>
          <p className="footer__link">margarita@gmail.com</p>
        </div>

        <div className="footer__network">
          <img src={} alt="logo_facebook" className="footer__image" />
          <img src={} alt="logo_instagram" className="footer__image" />
          <p>
            <img src={} alt="reloj" className="footer__image" /> Horario:
          </p>
          <p className="footer__time">Lunes a Viernes de 9:00h a 19:00h</p>
          <p className="footer__time">Sábados de 10:00h a 18:00h</p>
          <p className="footer__time">Domingos: 10:00h a 13:00h</p>
        </div>

        <div className="footer__legal">
          <a href="/aviso-legal" className="footer__legal-link">Aviso Legal</a>
          <a href="/cookies" className="footer__legal-link">Política de Cookies</a>
          <a href="/privacidad" className="footer__legal-link">Política de Privacidad</a>
        </div>

      </div>
    </footer>
  );
}
