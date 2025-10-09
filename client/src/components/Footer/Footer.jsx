import React from "react";
import "../../styles/components/_Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="main">
      <div className="logo">
        <a href="https://gaborlogistics.com/" target="_blank" rel="noopener noreferrer">
          <img src="/images/logobl.png" alt="GBL" /> 
        </a>
      </div>
      <div className="links">
        <ul>
          <li><a href="https://thebridge.tech/">Investigación</a></li>
          <li><a href="https://thebridge.tech/">Sectores</a></li>
          <li><a href="https://thebridge.tech/">Servicios</a></li>
          <li><a href="https://thebridge.tech/">Talento</a></li>
          <li><a href="https://thebridge.tech/">Noticias</a></li>
          <li><a href="https://thebridge.tech/">Sobre nosotros</a></li>
          <li><a href="https://thebridge.tech/">Inversores</a></li>
          <li><a href="https://thebridge.tech/">Contacto</a></li>
        </ul>
        <ul>
          <li><a href="https://thebridge.tech/">Accesibilidad</a></li>
          <li><a href="https://thebridge.tech/">Aviso de privacidad</a></li>
          <li><a href="https://thebridge.tech/">Notificación de vulnerabilidad de seguridad</a></li>
          <li><a href="https://thebridge.tech/">Política de cookies</a></li>
          <li><a href="https://thebridge.tech/">SpeakUp</a></li>
          <li><a href="https://thebridge.tech/">Configuración de cookies</a></li>
          <li><a href="https://thebridge.tech/">Términos de uso</a></li>
          <li><a href="https://thebridge.tech/">Aviso ante fraudes</a></li>
        </ul>
      </div>
    </div>
    <div className="bottom">
      <span>© EventLess, 2025. All rights reserved.</span>
      <div className="social">
        <a href="https://www.instagram.com/gaborlogisticsltd/" target="_blank" rel="noopener noreferrer">
          <img src="/images/Instagram.webp" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/GaborLogisticsLtd" target="_blank" rel="noopener noreferrer">
          <img src="/images/Facebook-1.webp" alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;