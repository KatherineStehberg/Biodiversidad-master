import React, { useState } from 'react';
import './Services.css';

const Servicios = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (name, price) => {
    const itemIndex = cart.findIndex((item) => item.name === name);
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    alert('Proceso de pago');
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="/productos">Productos</a></li>
          <li><a href="/quienes-somos">Acerca de</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/registrarse">Registrarse</a></li>
          <li><a href="/login" className="register-link">Iniciar Sesión</a></li>
          <li className="cart" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
            {showCart && (
              <div className="cart-popup">
                <h3>Carrito</h3>
                <div>
                  {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                  ) : (
                    cart.map((item, index) => (
                      <div key={index}>
                        <p>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>
                      </div>
                    ))
                  )}
                </div>
                <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                <div className="cart-buttons">
                  <button className="btn" onClick={checkout}>Pagar</button>
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
          <h5 className="section-title">Servicios</h5>
          <p className="section-description">
            Encuentra el servicio que necesitas...
          </p>
          <div className="projects-grid">
            {[
              {
                name: 'Consultoría Ambiental- Valor por Hora Especialista',
                price: 2.5,
                img: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post-2-Profesional-Accounting-Service-Business-Instagram-Post.png',
              },
              {
                name: 'Asesoría Ingresar SEIA- Valor por Hora Especialista',
                price: 2.5,
                img: 'https://biodiversidad.cl/wp-content/uploads/2024/09/Post_8_Ingresar_SEIA_Instagram.png',
              },
              // Add more products here
            ].map((service, index) => (
              <div key={index} className="project-card">
                <img src={service.img} alt={service.name} className="project-image" />
                <h3>{service.name}</h3>
                <p>{service.price} UF</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(service.name, service.price)}>
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
              <a href="https://www.instagram.com" target="_blank" className="social-icon instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" className="social-icon facebook">
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

export default Servicios;
