import React from "react";

const Contact = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">Biodiversidad.cl</a>
          </div>
          <ul className="nav-links">
            <li><a href="./Projects.html">Productos</a></li>
            <li><a href="./Services.html">Servicios</a></li>
            <li><a href="./Experts.html">Acerca de</a></li>
            <li><a href="./Contact.html" className="active">Contacto</a></li>
            <li><a href="./Register.js">Registrarse</a></li>
            <li><a href="./Login.js" className="register-link">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <section className="image-section">
        <h1>Contáctate con nosotros</h1>
      </section>

      <main>
        <section className="contact-form-section">
          <h1>Contacto</h1>
          <form action="submit_contact_form.php" method="post">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

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

export default Contact;
