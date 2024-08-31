// src/Routes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar"; // Si tienes una barra de navegación
import Footer from "./components/Footer"; // Si tienes un footer
import Products from "./Pages/Products"; //
function AppRoutes() {
  return (
    <Router>
      <div>
        {/* Navbar se muestra en todas las rutas */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        {/* Footer se muestra en todas las rutas */}
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoutes;
