const Model = require('../models/employee');
const db = require('./db');

//GET all shifts by user

const getShiftsByUser = () => {
  // should receive user_id, date range
  const queryString = `
          SELECT users.id as user_id, users.name as name, shifts.hours as hours, events.event_date, 
          shifts.id as shift_id
          FROM events
          JOIN shifts ON events.shift_id = shifts.id
          JOIN users ON events.user_id = users.id
          WHERE event_date >= '2020-10-19' AND event_date <= '2020-10-26'
          ORDER BY event_date;`;
  return db.query(queryString).then((response) => {
    return response.rows;
  });
};

//should accept 3 arguments: user_id, shift_id, category_id, date
const addShiftsByUser = (user_id, shift_id, category_id, date) => {
  // // shift_id = [1,2,3,4,5]
  // let qS = ''
  // for(let i of shift_id){
  //   qS +=
  //     `INSERT INTO events (user_id, shift_id, category_id, event_date, isPublished) VALUES ($1::integer, ${i}, $2::integer, $3::date, f)`;

  // }
  // const qString = qS, [user_id]

  // return db.query(qString).then((response) => {
  //   return response.rows;
  // });

  const queryString = qS`
    INSERT INTO events (user_id, shift_id, category_id, event_date, isPublished) VALUES ($1::integer, $2::integer, $3::integer, $4::date, f)
  
  `;
};

// react should be able to select multiple grids (find out what event listener to use. onClickHold)
const updateShiftString = `UPDATE events SET user_id = 2
WHERE user_id = 3 AND shift_id IN (8,9) AND event_date = '2020-10-27';`;

module.exports = {
  getShiftsByUser,
};
