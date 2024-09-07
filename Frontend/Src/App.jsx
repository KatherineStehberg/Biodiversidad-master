import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          {/* Añade más rutas según tus necesidades, elimina cualquier ruta de proyectos */}
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
