const Model = require('../models/employee');
const db = require('./db');

//GET all shifts by user

const getShiftsByUser = () => {
  // should receive user_id, date range
  const queryString = `
          SELECT users.id as user_id, users.name as name, shifts.hours as hours, events.event_date, shifts.id as shift_id
          FROM events
          JOIN shifts ON events.shift_id = shifts.id
          JOIN users ON events.user_id = users.id
          WHERE user_id = 1 AND
          event_date >= '2020-10-19' AND event_date <= '2020-10-26';`;
  return db.query(queryString).then((response) => {
    return response.rows;
  });
};

module.exports = {
  getShiftsByUser,
};
