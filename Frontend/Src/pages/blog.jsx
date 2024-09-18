import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([
    { title: 'Título del Blog Post 1', description: 'Descripción breve del blog post 1.' },
    { title: 'Título del Blog Post 2', description: 'Descripción breve del blog post 2.' },
    { title: 'Título del Blog Post 3', description: 'Descripción breve del blog post 3.' }
  ]);

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPost = { title: newPostTitle, description: newPostContent };
    setPosts([...posts, newPost]);
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">Biodiversidad.cl</a>
          </div>
          <ul className="nav-links">
            <li><a href="/Frontend/Src/pages/Productos.html">Productos</a></li>
            <li><a href="/Frontend/Src/pages/Services.html">Servicios</a></li>
            <li><a href="/Frontend/Src/pages/Quienessomos.html">Acerca de</a></li>
            <li><a href="/Frontend/Src/pages/Contact.html">Contacto</a></li>
            <li><a href="/Frontend/Src/pages/Signup.html">Registrarse</a></li>
            <li><a href="/Frontend/Src/pages/Login.html" className="register-link">Iniciar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <div className="container main-content">
        <div className="blog-posts">
          {posts.map((post, index) => (
            <article className="blog-post" key={index}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="submission-form">
          <h2>Envía tu Publicación</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="post-title">Título</label>
              <input
                type="text"
                id="post-title"
                name="post-title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="post-content">Contenido</label>
              <textarea
                id="post-content"
                name="post-content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                required
              ></textarea>
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
              Contacto:
              <a href="mailto:info@biodiversidad.cl">info@biodiversidad.cl</a>
            </p>
            <div className="social-icons"></div>
          </div>
          <p>&copy; 2024 Biodiversidad.cl. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
