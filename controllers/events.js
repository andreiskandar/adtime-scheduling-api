const Model = require('../models/employee');
const db = require('./db');

//GET all shifts by user
const getShiftsByUser = () => {
  const queryString = `
          SELECT *, shifts.hours as hours
          FROM events
          JOIN shifts ON events.shift_id = shifts.id 
          WHERE user_id = 1 AND
          event_date >= '2020-10-22' AND event_date <= '2020-10-26';`;
  return db.query(queryString).then((response) => {
    return response.rows;
  });
};

module.exports = {
  getShiftsByUser,
};
