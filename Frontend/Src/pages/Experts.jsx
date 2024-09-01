import React from "react";
import "../assets/style/Experts.css";

const Experts = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="./Projects.html">Productos</a></li>
          <li><a href="./Services.html">Servicios</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./Contact.html">Contacto</a></li>
          <li><a href="./Register.js">Registrarse</a></li>
          <li><a href="./Login.js" className="register-link">Iniciar Sesión</a></li>
        </ul>
      </nav>

      <header className="header">
        <div className="container">
          <h1 className="main-title">Nuestros Expertos</h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Conoce Más Sobre Nosotros</h2>
          <p className="section-description">
            En Biodiversidad.cl, estamos comprometidos con la conservación y la
            biodiversidad. Conoce más sobre nuestra misión, visión y valores.
          </p>
          <div className="mission-vision-container">
            <div className="mission-vision-card mission-text-right">
              <img src="https://via.placeholder.com/150" alt="Misión" />
              <div className="content">
                <h2>Misión</h2>
                <p>
                  Nuestra misión es preservar y proteger la biodiversidad para
                  garantizar un futuro sostenible para las generaciones venideras.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-left">
              <img src="https://via.placeholder.com/150" alt="Visión" />
              <div className="content">
                <h2>Visión</h2>
                <p>
                  Aspiramos a ser líderes en la conservación de la biodiversidad y
                  a inspirar a otros a unirse a nuestra causa.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-right">
              <img src="https://via.placeholder.com/150" alt="Valores" />
              <div className="content">
                <h2>Valores</h2>
                <p>
                  Nos guiamos por la integridad, la pasión y el compromiso con la
                  naturaleza y la comunidad.
                </p>
              </div>
            </div>
            <div className="mission-vision-card mission-text-left">
              <img src="https://via.placeholder.com/150" alt="Historia" />
              <div className="content">
                <h2>Historia</h2>
                <p>
                  Conoce la historia detrás de nuestra organización y cómo hemos
                  evolucionado a lo largo de los años.
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
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="social-icon instagram"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="social-icon facebook"
                rel="noopener noreferrer"
              >
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

export default Experts;
