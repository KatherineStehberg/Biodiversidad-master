const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');

async function register(req, res) {
    const { username, password, email, role_ide } = req.body;

try {
    const userCheckQuery = 'SELECT * FROM users WHERE username = $1 OR email = $2';
    const { rows: existingUser } = await db.query(userCheckQuery, [username, email]);

    if (existingUser.length > 0){
        return res.status(400).json({ message: 'nombre o correo ya existe' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, password, email, role_ide) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role_id*';
    const {rows} = await db.query(query, [username, hashedPassword, email, role_id]);
    const newUser = rows[0];

    const token = jwt.sing ({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
        success: true,
        message: 'Usuario registrado',
        token,
        redirect: '/Frontend/Src/pages/Dashboard.html'
    })
} catch (error) { 
    console.error("Error en el registro", error.message);
    res.status(500).json({ message: 'Error en el registro' });  
}
}

module.exports = { 
    register, 
};