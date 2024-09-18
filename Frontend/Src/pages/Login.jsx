import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "../assets/style/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('¡Inicio de sesión exitoso!');
        localStorage.setItem('token', data.token);
        navigate('/Frontend/src/pages/Dashboard.jsx');
      } else {
        alert(data.message || 'Correo electrónico o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error, por favor intenta de nuevo.');
    }
  };

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
          <form id="loginForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email"><span className="gray-text">Correo Electrónico</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
