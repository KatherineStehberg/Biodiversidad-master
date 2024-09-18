import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { UserContextProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import SliderSection from './components/SliderSection';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedServices from './components/FeaturedServices';
import Footer from './components/Footer';
import productsData from './../Public/productos.json';

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Puedes pasar los datos del JSON a un componente de Productos */}
            <Route path="/products" element={<Products products={productsData} />} />
            {/* Añade más rutas según tus necesidades */}
          </Routes>
        </UserContextProvider>
      </Router>
      
      {/* Estructura principal con Navbar, Menu, etc. */}
      <div>
        <header>
          <Navbar />
          <Menu />
        </header>
        <main>
          <SliderSection />
          <FeaturedProducts />
          <FeaturedServices />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;