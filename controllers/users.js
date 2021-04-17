const userModel = require('../models/users');
const Model = require('../models/employee');
const db = require('./db');

//GET user by name
const getUserByName = (name) => {
  return db.query(`SELECT * FROM users WHERE name LIKE '${name}%';`).then((response) => {
    return response.rows;
  });
};

//GET all users
const getAllUsers = () => {
  return db.query('SELECT * FROM users').then((response) => {
    return response.rows;
  });
};

async function authenticate(email, password) {
  const results = await userModel.getByEmail(email);
  if (!results.length) {
    throw new Error(`UserController: Cannot find email "${email}" in DB`);
  }
  const dbUser = results.pop();
  // decrypt dbUserPassword, then compare the decrypted password
  if (password !== dbUser.password) {
    throw new Error(`UserController: Given password "${password}" does not match dbUser password "${dbUser.password}"`);
  }
  return dbUser;
}

module.exports = {
  getUserByName,
  getAllUsers,
  authenticate,
};
