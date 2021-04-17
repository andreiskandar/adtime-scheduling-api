// PG database client/connection setup
const { Pool } = require('pg');

let dbParams = {};

if (process.env.DB_URL) {
  console.log('am i true');
  dbParams.connectionString = process.env.DB_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  };
}
const client = new Pool(dbParams);

client.connect(() => {
  console.log('connected to database');
});

module.exports = client;
