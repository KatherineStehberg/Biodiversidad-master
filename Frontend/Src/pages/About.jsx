import React from 'react';
import './Quienessomos.css';

const About = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="/Productos">Productos</a></li>
          <li><a href="/Services">Servicios</a></li>
          <li><a href="/Blog">Blog</a></li>
          <li><a href="/Contact">Contacto</a></li>
          <li><a href="/Signup">Registrarse</a></li>
          <li><a href="/Login" className="register-link">Iniciar Sesión</a></li>
        </ul>
      </nav>

      <header className="header">
        <div className="container">
          <h1 className="main-title">Quiénes Somos</h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Conoce Más Sobre Nosotros</h2>
          <p className="section-description">
            En Biodiversidad.cl, estamos comprometidos con la conservación y la biodiversidad.
            Conoce más sobre nuestra misión, visión y valores.
          </p>
          <div className="mission-vision-container">
            <div className="mission-vision-card mission-text-right">
              <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/mission-1.png" alt="Misión" />
              <div className="content">
                <h2>Misión</h2>
                <p>
                  Nuestra misión en Biodiversidad.cl es conectar a personas y organizaciones
                  comprometidas con la conservación del medio ambiente y la diversidad biológica,
                  facilitando el acceso a productos y servicios sostenibles.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-left">
              <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/vision_biodiversidad.png" alt="Visión" />
              <div className="content">
                <h2>Visión</h2>
                <p>
                  Nuestra visión es convertirnos en la principal plataforma de referencia en Chile y Latinoamérica
                  para la compra y venta de productos y servicios relacionados con la biodiversidad.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-right">
              <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/valores_biodiversidad.png" alt="Valores" />
              <div className="content">
                <h2>Valores</h2>
                <p>
                  Nos guiamos por la integridad, la pasión y el compromiso con la naturaleza y la comunidad.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-left">
              <img src="https://biodiversidad.cl/wp-content/uploads/2024/09/history-biodiversidad.png" alt="Historia" />
              <div className="content">
                <h2>Historia</h2>
                <p>
                  Biodiversidad.cl nació como una iniciativa apasionada de un grupo de profesionales comprometidos
                  con la conservación del medio ambiente y la promoción de prácticas sostenibles en Chile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
          <div className="contact-social-container">
            <p className="contact-info">
              Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a>
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
