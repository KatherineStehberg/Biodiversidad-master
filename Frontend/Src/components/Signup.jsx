import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/Signup.css'; // Asegúrate de tener un archivo de estilo para este componente

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Manejar el registro del usuario
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login'); // Redirige al login tras un registro exitoso
      } else {
        setError(data.message || 'Error en el registro');
      }
    } catch (err) {
      setError('Error en el registro. Inténtalo nuevamente.');
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
        <div className="signup-form">
          <h2>Regístrate</h2>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            <button type="submit" className="signup-button">
              Registrarse
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default Signup;
