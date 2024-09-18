import React, { useState } from 'react';
import '../assets/style/Projects.css';

const Productos = () => {
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

  const updateCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="./Services">Servicios</a></li>
          <li><a href="./Quienessomos">Acerca de</a></li>
          <li><a href="./Blog">Blog</a></li>
          <li><a href="./Contact">Contacto</a></li>
          <li><a href="./Signup">Registrarse</a></li>
          <li><a href="./Login" className="register-link">Iniciar Sesión</a></li>
          <li className="cart" onClick={() => setShowCart(!showCart)}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
            {showCart && (
              <div className="cart-popup">
                <h3>Carrito</h3>
                <div>
                  {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                  ) : (
                    cart.map((item, index) => (
                      <div className="cart-item" key={index}>
                        <p>{item.name} x {item.quantity}</p>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))
                  )}
                </div>
                <p className="cart-total">Total: ${updateCartTotal().toFixed(2)}</p>
                <div className="cart-buttons">
                  <button className="btn" onClick={() => alert('Proceso de pago')}>Pagar</button>
                  <button className="btn" onClick={clearCart}>Borrar</button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="main-title">Nuestros Productos</h1>
        </div>
      </header>

      <section id="projects" className="section">
        <div className="container">
          <h5 className="section-title">Productos</h5>
          <p className="section-description">Encuentra el producto que necesitas...</p>
          <div className="projects-grid">
            {/* Producto 1 */}
            <div className="project-card">
              <img src="../assets/img/basureros.jpg" alt="Producto 1" className="project-image" />
              <h3>Producto 1</h3>
              <p>$10.00</p>
              <button className="add-to-cart-btn" onClick={() => addToCart('Producto 1', 10.00)}>Añadir al Carrito</button>
            </div>
            {/* Producto 2 */}
            <div className="project-card">
              <img src="../assets/img/bebederodeaves.jpg" alt="Producto 2" className="project-image" />
              <h3>Producto 2</h3>
              <p>$20.00</p>
              <button className="add-to-cart-btn" onClick={() => addToCart('Producto 2', 20.00)}>Añadir al Carrito</button>
            </div>
            {/* Más productos */}
            {/* Agrega más productos aquí */}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p>Dirección: Avenida Egaña 1638, B. Peñalolén, Santiago, Chile</p>
          <div className="contact-social-container">
            <p className="contact-info">Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a></p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook">
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

export default Productos;
