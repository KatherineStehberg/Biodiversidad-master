const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const projectsRouter = require('./routes/projects'); // Ruta para proyectos
const usersRouter = require('./routes/users'); // Ruta para usuarios
const servicesRouter = require('./routes/services'); // Ruta para servicios
const productsRouter = require('./routes/products'); // Ruta para productos
const authRouter = require('./Routes/auth'); // Ruta para autenticación

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON y urlencoded
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para verificar JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido o expirado' });
    }
};

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor backend de Biodiversidad!');
});

// Rutas para proyectos, usuarios, servicios y productos
app.use('/api/projects', authenticateJWT, projectsRouter); // Ruta protegida para proyectos
app.use('/api/users', authenticateJWT, usersRouter); // Ruta protegida para usuarios
app.use('/api/services', authenticateJWT, servicesRouter); // Ruta protegida para servicios
app.use('/api/products', authenticateJWT, productsRouter); // Ruta protegida para productos
app.use('/api/auth', authRouter); // Ruta pública para autenticación

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
