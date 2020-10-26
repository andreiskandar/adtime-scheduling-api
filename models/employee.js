const { response } = require('express');
const db = require('../controllers/db');

function removeShiftIds(shiftId, eventDate, userId) {
  const cancelShift = (queryString, shiftId) => {
    return  db.query(queryString, [shiftId, eventDate, userId])
      .then((response) => {
        return true;
      })
      .catch((err) => {
        console.error("ERROR", err)
      })
  }
  for (const shift_id of shiftId) {
    console.log("SHIFTID IDID I", shift_id)
    const queryString = `DELETE FROM events WHERE shift_id=$1 AND event_date=$2 AND user_id=$3`;
    cancelShift(queryString, shift_id)    
  }
}

module.exports = {
  removeShiftIds,
}

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