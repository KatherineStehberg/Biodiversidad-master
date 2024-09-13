const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'biodiversidad',
  password: '1581',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
