import React, { useState } from 'react';
import '../assets/style/Signup.css';    

const SignupPage = () => {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.name,
                    email: formData.email,
                    password: formData.password
                }),
            });

            if (response.ok) {
                setSuccessMessageVisible(true);
            } else {
                alert('Error en el registro. Por favor, inténtelo de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema con la solicitud. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <div className="container">
            <section className="signup-form">
                <h2>Regístrate</h2>
                <p className="subtext">Empieza tu prueba gratuita de 30 días</p>
                
                {successMessageVisible && (
                    <div id="successMessage" className="alert alert-success">
                        ¡Usted ha sido registrado exitosamente!
                    </div>
                )}
                
                <form id="signupForm" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Ingresa tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Ingresa tu correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Crea una contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="password-info">Debe tener al menos 8 caracteres.</p>
                    <button type="submit" className="signup-button">Crear cuenta</button>
                </form>
                <div className="login-link">
                    <p>¿Ya tienes una cuenta? <a href="login.html">Inicia sesión aquí</a></p>
                </div>
            </section>
        </div>
    );
};

export default SignupPage;
