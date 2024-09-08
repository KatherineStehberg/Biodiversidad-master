import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Biodiversidad.cl</a>
      </div>
      <div className="search-bar">
        <select>
          <option value="all">Todos</option>
          <option value="products">Productos</option>
          <option value="services">Servicios</option>
        </select>
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>Buscar</button>
      </div>
      <div className="user-actions">
        <i className="bi bi-cart"></i>
        <span id="cart-count">0</span>
      </div>
    </nav>
  );
};

export default Navbar;
