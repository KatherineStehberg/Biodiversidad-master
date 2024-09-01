import React from 'react';
import '../assets/style/Logis.css';

const LoginPage = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
      </nav>
      <section>
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <p className="subtext">¡Bienvenido de nuevo! Por favor, ingresa tus datos</p>
          <form id="loginForm">
            <div>
              <label htmlFor="email"><span className="gray-text">Correo Electrónico</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password"><span className="gray-text">Contraseña</span></label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="gray-text">Recordar por 30 días</label>
              <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="purple-button">Iniciar Sesión</button>
          </form>
        </div>
      </section>
      <footer>
        <h2>Todos los derechos reservados</h2>
        <div className="socialmedia-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
