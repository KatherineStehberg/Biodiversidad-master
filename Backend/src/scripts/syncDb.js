const sequelize = require('../config/connection');
const User = require('../models/user');

const syncDb = async () => {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea las tablas; usa { alter: true } para cambios incrementales
    console.log('Base de datos sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

syncDb();
