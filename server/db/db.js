const { Pool} = require( 'pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '0000',
  port: 5432,
});
module.exports = pool;
