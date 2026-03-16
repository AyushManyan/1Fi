const { Pool } = require('pg');

// Database configuration
const pool = new Pool({
  user: 'postgres',
  password: 'Ayush@2003',
  host: 'localhost',
  port: 5432,
  database: 'orderdb',
});

module.exports = pool;
