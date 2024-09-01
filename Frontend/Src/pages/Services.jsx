import React, { useState } from 'react';
import '../assets/style/Services.css';

const ServicesPage = () => {
    const [cart, setCart] = useState([]);
    const [cartVisible, setCartVisible] = useState(false);

    const addToCart = (name, price) => {
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.name === name);
            if (itemIndex > -1) {
                const newCart = [...prevCart];
                newCart[itemIndex].quantity += 1;
                return newCart;
            } else {
                return [...prevCart, { name, price, quantity: 1 }];
            }
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        alert('Proceso de pago');
    };

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <a href="/">Biodiversidad.cl</a>
                </div>
                <ul className="nav-links">
                    <li><a href="./Projects.html">Productos</a></li>
                    <li><a href="./Experts.html">Acerca de</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><a href="./Contact.html">Contacto</a></li>
                    <li><a href="./Register.js">Registrarse</a></li>
                    <li><a href="./Login.js" className="register-link">Iniciar Sesión</a></li>
                    <li className="cart" onClick={toggleCart}>
                        <span className="cart-icon">🛒</span>
                        <span className="cart-count">{cart.length}</span>
                        {cartVisible && (
                            <div className="cart-popup">
                                <h3>Carrito</h3>
                                <div id="cart-items">
                                    {cart.map(item => (
                                        <div className="cart-item" key={item.name}>
                                            <p>{item.name} x {item.quantity}</p>
                                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="cart-total">Total: ${cartTotal}</p>
                                <div className="cart-buttons">
                                    <button className="btn" onClick={handleCheckout}>Pagar</button>
                                    <button className="btn" onClick={clearCart}>Borrar</button>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>

            <header className="header">
                <div className="container">
                    <h1 className="main-title">Nuestros Servicios</h1>
                </div>
            </header>

            <section id="projects" className="section">
                <div className="container">
                    <h5 className="section-title">Productos</h5>
                    <p className="section-description">
                        Encuentra el producto que necesitas...
                    </p>
                    <div className="projects-grid">
                        {Array.from({ length: 8 }, (_, index) => (
                            <div className="project-card" key={index}>
                                <img src={`https://via.placeholder.com/150?text=Producto+${index + 1}`} alt={`Producto ${index + 1}`} className="project-image" />
                                <h3>Producto {index + 1}</h3>
                                <p>${(index + 1) * 10}.00</p>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => addToCart(`Producto ${index + 1}`, (index + 1) * 10)}
                                >
                                    Añadir al Carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
                    <div className="contact-social-container">
                        <p className="contact-info">Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a></p>
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

export default ServicesPage;
