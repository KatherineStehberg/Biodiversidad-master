import React, { useState } from 'react';
import '../assets/style/Projects.css';

const Projects = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (name, price) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.name === name);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { name, price, quantity: 1 }];
      }
    });
  };

  const updateCart = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return {
      items: cart,
      total: total.toFixed(2),
    };
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    alert('Proceso de pago');
  };

  const { items, total } = updateCart();

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="/">Biodiversidad.cl</a>
        </div>
        <ul className="nav-links">
          <li><a href="./Services.html">Servicios</a></li>
          <li><a href="./Experts.html">Acerca de</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./Contact.html">Contacto</a></li>
          <li><a href="./Register.js">Registrarse</a></li>
          <li><a href="./Login.js" className="register-link">Iniciar Sesión</a></li>
          <li className="cart" onClick={handleCartToggle}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
            {isCartOpen && (
              <div className="cart-popup">
                <h3>Carrito</h3>
                <div id="cart-items">
                  {items.map((item, index) => (
                    <div className="cart-item" key={index}>
                      <p>{item.name} x {item.quantity}</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <p className="cart-total">Total: ${total}</p>
                <div className="cart-buttons">
                  <button className="btn" onClick={handleCheckout}>Pagar</button>
                  <button className="btn" onClick={handleClearCart}>Borrar</button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

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
            {[
              { name: 'Producto 1', price: 10.00 },
              { name: 'Producto 2', price: 20.00 },
              { name: 'Producto 3', price: 30.00 },
              { name: 'Producto 4', price: 40.00 },
              { name: 'Producto 5', price: 50.00 },
              { name: 'Producto 6', price: 60.00 },
              { name: 'Producto 7', price: 70.00 },
              { name: 'Producto 8', price: 80.00 },
            ].map((product, index) => (
              <div className="project-card" key={index}>
                <img src="https://via.placeholder.com/150" alt={`Producto ${index + 1}`} className="project-image" />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product.name, product.price)}>
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
            <p className="contact-info">
              Contacto: <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a>
            </p>
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

export default Projects;
