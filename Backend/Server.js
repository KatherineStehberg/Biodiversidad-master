const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import routes
const projectsRouter = require('./routes/projects'); // Ruta para proyectos
const usersRouter = require('./routes/users'); // Ruta para usuarios
const servicesRouter = require('./routes/services'); // Ruta para servicios
const productsRouter = require('./routes/products'); // Ruta para productos
const authRouter = require('./routes/auth'); // Ruta para autenticación

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON y datos URL-encoded
app.use(cors()); // Configura CORS si necesario para tu caso específico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para verificar JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Acceso denegado. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
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

// Rutas con autenticación JWT
app.use('/api/projects', authenticateJWT, projectsRouter);
app.use('/api/users', authenticateJWT, usersRouter);
app.use('/api/services', authenticateJWT, servicesRouter);
app.use('/api/products', authenticateJWT, productsRouter);
app.use('/api/auth', authRouter); // Ruta pública para autenticación

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
