import React, { useState } from 'react';
import './Signup.css'; // Asegúrate de que la ruta sea correcta

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el registro de usuario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <a href="/"><img src="../assets/logo.png" alt="Logo de Biodiversidad.cl" /></a> {/* Inserta tu logo */}
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="signup-container">
          <h1>Crear una Cuenta</h1>
          <p>Únete a nuestra comunidad y colabora con los mejores expertos en medio ambiente.</p>

          <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">Registrarse</button>
          </form>

          <p>¿Ya tienes una cuenta? <a href="./Login.html">Inicia Sesión</a></p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Biodiversidad.cl - Todos los derechos reservados</p>
        <ul>
          <li><a href="/privacy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos y Condiciones</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Signup;
