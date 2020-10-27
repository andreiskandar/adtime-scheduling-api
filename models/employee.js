const { response } = require('express');
const db = require('../controllers/db');

function removeShiftIds(shiftId, eventDate, userId) {
  const cancelShift = (queryString, shiftId) => {
    return db
      .query(queryString, [shiftId, eventDate, userId])
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error('From removeShiftIds', err);
      });
  };
  for (const shift_id of shiftId) {
    const queryString = `DELETE FROM events WHERE shift_id=$1 AND event_date=$2 AND user_id=$3`;
    cancelShift(queryString, shift_id);
  }
}

module.exports = {
  removeShiftIds,
};
