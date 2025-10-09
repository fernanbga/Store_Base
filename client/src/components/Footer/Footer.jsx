import React from "react";
import "../../styles/components/_Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="main">
      <div className="logo">
        <a href="https://gaborlogistics.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/logobl.png" alt="GBL" />
        </a>
      </div>
      <div className="links">
        <ul>
          <li><a href="https://www.capgemini.com/es-es/investigacion/">Investigación</a></li>
          <li><a href="https://www.capgemini.com/es-es/sectores/">Sectores</a></li>
          <li><a href="https://www.capgemini.com/es-es/servicios/">Servicios</a></li>
          <li><a href="https://www.capgemini.com/es-es/talentos/">Talento</a></li>
          <li><a href="https://www.capgemini.com/es-es/noticias/">Noticias</a></li>
          <li><a href="https://www.capgemini.com/es-es/sobre-nosotros/">Sobre nosotros</a></li>
          <li><a href="https://investors.capgemini.com/en/">Inversores</a></li>
          <li><a href="https://www.capgemini.com/es-es/contactenos/">Contacto</a></li>
        </ul>
        <ul>
          <li><a href="https://www.capgemini.com/es-es/accesibilidad/">Accesibilidad</a></li>
          <li><a href="https://www.capgemini.com/es-es/aviso-de-privacidad/">Aviso de privacidad</a></li>
          <li><a href="https://www.capgemini.com/es-es/notificacion-de-vulnerabilidad-de-seguridad/">Notificación de vulnerabilidad de seguridad</a></li>
          <li><a href="https://www.capgemini.com/es-es/cookie-policy/">Política de cookies</a></li>
          <li><a href="https://www.capgemini.com/es-es/quienes-somos/valores-y-etica/speak-up/">SpeakUp</a></li>
          <li><a href="https://www.capgemini.com/es-es/#">Configuración de cookies</a></li>
          <li><a href="https://www.capgemini.com/es-es/condiciones-de-uso/">Términos de uso</a></li>
          <li><a href="https://www.capgemini.com/es-es/aviso-fraudes/">Aviso ante fraudes</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom">
      <span>© EventLess, 2025. All rights reserved.</span>
      <div className="social">
        <a href="https://www.instagram.com/gaborlogisticsltd/" target="_blank" rel="noopener noreferrer">
          <img src="/Instagram.webp" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/GaborLogisticsLtd" target="_blank" rel="noopener noreferrer">
          <img src="/Facebook-1.webp" alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;