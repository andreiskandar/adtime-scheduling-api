const { response } = require('express');
const db = require('../controllers/db');

function removeShiftIds(shiftId, eventDate, userId) {
  const cancelShift = (queryString, shiftId) => {
    return db
      .query(queryString, [shiftId, userId])
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error('From removeShiftIds', err);
      });
  };
  for (const shift_id of shiftId) {
    const queryString = `
    DELETE FROM events 
    WHERE shift_id=$1 AND event_date='${eventDate} ${parseInt(shift_id) + 8}:00:00' 
    AND user_id=$2;`;
    cancelShift(queryString, shift_id);
  }
}

module.exports = {
  removeShiftIds,
};
