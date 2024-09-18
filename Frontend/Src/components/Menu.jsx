import React from 'react';

const Menu = () => {
  return (
    <nav className="menu">
      <a href="/Frontend/Src/pages/Productos.jsx">Productos</a>
      <a href="/Frontend/Src/pages/Servicios.jsx">Servicios</a>
      <a href="/Frontend/Src/pages/About.jsx">Acerca de</a>
      <a href="/Frontend/Src/pages/Blog.jsx">Blog</a>
      <a href="/Frontend/Src/pages/Contact.jsx">Contacto</a>
      <a href="/Frontend/Src/pages/Signup.jsx">Registrarse</a>
      <a href="/Frontend/Src/pages/Login.jsx" className="register-link">Iniciar Sesión</a>
    </nav>
  );
};

export default Menu;