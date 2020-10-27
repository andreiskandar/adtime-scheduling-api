const db = require('../controllers/db');

async function getByEmail(email) {
  const queryString = `SELECT *, users.name as username FROM users JOIN user_types ON users.user_type_id = user_types.id WHERE email=$1`;
  const results = await db.query(queryString, [email]);
  return results.rows
}

module.exports = {
  getByEmail,
}