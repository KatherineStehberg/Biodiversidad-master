import React, { useState } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState([
    { title: 'Título del Blog Post 1', content: 'Descripción breve del blog post 1.' },
    { title: 'Título del Blog Post 2', content: 'Descripción breve del blog post 2.' },
    { title: 'Título del Blog Post 3', content: 'Descripción breve del blog post 3.' },
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements['post-title'].value;
    const content = event.target.elements['post-content'].value;

    const newPost = { title, content };
    setPosts([...posts, newPost]);

    event.target.reset();
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">Biodiversidad.cl</a>
          </div>
          <ul className="nav-links">
            <li><a href="/Projects">Productos</a></li>
            <li><a href="/Services">Servicios</a></li>
            <li><a href="/Experts">Acerca de</a></li>
            <li><a href="/Contact">Contacto</a></li>
            <li><a href="/Register">Registrarse</a></li>
            <li><a href="/Login" className="register-link">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <div className="container main-content">
        <div className="blog-posts" id="blog-posts">
          {posts.map((post, index) => (
            <article key={index} className="blog-post">
              <h2>{post.title}</h2>
              <p>{post.content} <a href="#">Leer más...</a></p>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="submission-form">
          <h2>Envía tu Publicación</h2>
          <form id="post-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="post-title">Título</label>
              <input type="text" id="post-title" name="post-title" required />
            </div>
            <div className="form-group">
              <label htmlFor="post-content">Contenido</label>
              <textarea id="post-content" name="post-content" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Enviar Publicación</button>
          </form>
        </div>
      </div>

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

export default BlogPage;
