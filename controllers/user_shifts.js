const Model = require('../models/employee')
const db = require('./db')

//GET all shifts
const getAllUserShifts = () => {
  return db.query('SELECT * FROM user_shifts')
    .then((response) => {
      return response.rows;
    }); 
}

module.exports = {
  getAllUserShifts
}
