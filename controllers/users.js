const userModel = require('../models/users')
const Model = require('../models/employee');
const db = require('./db');

//GET user by ID
const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]).then((response) => {
    return response.rows[0];
  });
};

//GET all users
const getAllUsers = () => {
  return db.query('SELECT * FROM users').then((response) => {
    return response.rows;
  });
};


async function authenticate(email, password) {
  const results = await userModel.getByEmail(email)
  if (!results.length) {
    throw new Error(`UserController: Cannot find email "${email}" in DB`)
  }
  const dbUser = results.pop()
  // decrypt dbUserPassword, then compare the decrypted password
  if (password !== dbUser.password) {
    throw new Error(`UserController: Given password "${password}" does not match dbUser password "${dbUser.password}"`)
  }
  return dbUser
}

module.exports = {
  getUserById,
  getAllUsers,
  authenticate,
};

// function list() {
//   // this needs to be massaged result of pg.query
//   //const user = db.query('SELECT * FROM users')
//   const results = [
//     {
//       id: 1,
//       firstName: 'Jane',
//       lastName: 'Doe',
//     },
//     {
//       id: 2,
//       firstName: 'Alice',
//       lastName: 'Doe',
//     },
//   ]
//   const employees = []
//   for (const result of results) {
//     employees.push(new Employee({
//       id,
//       firstName,
//       lastName,
//     }))
//   }
//   return employees
// }

// function update(id, options) {
//   // return all employees
// }

// function remove(id) {
//  // delete employee by id
// }

// // model specific ops

// function changeShift(id) {
//  // change the shift for an employee
// }
