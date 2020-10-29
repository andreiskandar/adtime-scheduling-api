const eventShiftModel = require('../models/employee');
const transferShiftModel = require('../models/transfershift');
const Model = require('../models/employee');
const db = require('./db');

async function transferShift(userId, shiftId, transferToUserId, event_date) {
  await transferShiftModel.transferShiftId(userId, shiftId, transferToUserId, event_date);
  return true;
}

async function grabShiftId(shiftId, eventDate, userId) {
  await eventShiftModel.removeShiftIds(shiftId, eventDate, userId);
  return true;
}

//GET all shifts by user
const getShiftsByWeek = (firstDay, lastDay) => {
  // should receive date range
  const queryString = `
          SELECT users.id as user_id, users.name as name, shifts.hours as hours, events.event_date, 
          shifts.id as shift_id, events.category_id as category_id, events.isPublished as isPublished
          FROM events
          JOIN shifts ON events.shift_id = shifts.id
          JOIN users ON events.user_id = users.id
          WHERE event_date >= $1 AND event_date <= $2
          ORDER BY event_date;`;
  return db.query(queryString, [firstDay, lastDay]).then((response) => {
    return response.rows;
  });
          
  // return db.query(queryString).then((response) => {
  //   return response.rows;
  // });
};

//should accept 3 arguments: user_id, shift_id, category_id, date
const addShiftsByUser = (user_id, shift_id, category_id, date) => {
  const addFunction = (queryString, shiftId) => {
    return db.query(queryString, [user_id, shiftId, category_id, date]).then((response) => {
      return response.rows;
    });
  };

  for (const shiftId of shift_id) {
    let queryString = `
    INSERT INTO events (user_id, shift_id, category_id, event_date) 
    VALUES ($1::integer, $2::integer, $3::integer, $4::date);`;
    addFunction(queryString, shiftId);
  }
};

const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]).then((response) => {
    return response.rows[0];
  });
};

//Select all events in the week range and set published to true
const publishWeek = (publish, firstDay, lastDay) => {
  const queryString = `
  UPDATE events SET isPublished = $1
  WHERE event_date >= $2 AND event_date <= $3;`;
  return db.query(queryString, [publish, firstDay, lastDay]).then((response) => {
    return response.rows;
  });
};
// react should be able to select multiple grids (find out what event listener to use. onClickHold)
const updateShiftString = `UPDATE events SET user_id = 2
WHERE user_id = 3 AND shift_id IN (8,9) AND event_date = '2020-10-27';`;

const getEventsForReminder = () => {
  // const queryString = `select NOW() AT TIME ZONE 'PDT'`;
  const queryString = `
  SELECT users.id, users.name as name, users.slack_username as slack_username, categories.name as event_name, event_date
  FROM events
  JOIN users ON users.id = events.user_id
  JOIN categories ON categories.id = events.category_id
  WHERE event_date
  BETWEEN (select NOW() AT TIME ZONE 'PDT') AND (select NOW() AT TIME ZONE 'PDT' ) + interval '30 minutes';`;

  return db.query(queryString).then((res) => {
    return res.rows[0];
  });
};
module.exports = {
  getShiftsByWeek,
  addShiftsByUser,
  publishWeek,
  grabShiftId,
  transferShift,
  getEventsForReminder,
};
