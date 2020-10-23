const Model = require('../models/employee')
const db = require('./db')

//GET all shifts
const getAllShifts = () => {
  return db.query('SELECT * FROM shifts')
    .then((response) => {
      return response.rows;
    }); 
}

module.exports = {
  getAllShifts
}
