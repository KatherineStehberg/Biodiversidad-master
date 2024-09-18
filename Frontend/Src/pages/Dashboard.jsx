import React, { useState } from 'react';
import '/Frontend/Src/assets/style/Dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const newItem = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        image: reader.result,
      };

      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = newItem;
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, newItem]);
      }

      setFormData({ name: '', description: '', price: '', image: null });
    };

    if (formData.image) {
      reader.readAsDataURL(formData.image);
    }
  };

  const editProduct = (index) => {
    const item = items[index];
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price,
      image: null,
    });
    setEditIndex(index);
  };

  const deleteProduct = (index) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    }
  };

  return (
    <div>
      <header>
        <div className="menu-bar">
          <div className="logo">
            <a href="/index.html">biodiversidad.cl</a>
          </div>
          <div className="exit-link">
            <a href="/index.html">Salir</a>
          </div>
        </div>
      </header>

      <main>
        <h1>Subir productos</h1>

        <div className="form-container">
          <form id="uploadForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="description">Descripción:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="image">Imagen:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              required
            />

            <button type="submit">Subir Producto</button>
          </form>
        </div>

        <div className="items-container">
          <h2>Productos Cargados</h2>
          <div id="itemsList">
            {items.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.image} alt={item.name} />
                <p>
                  <strong>Nombre:</strong> {item.name}
                </p>
                <p>
                  <strong>Descripción:</strong> {item.description}
                </p>
                <p>
                  <strong>Precio:</strong> ${item.price}
                </p>
                <button onClick={() => editProduct(index)}>Editar</button>
                <button onClick={() => deleteProduct(index)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
