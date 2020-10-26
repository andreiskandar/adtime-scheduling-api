const db = require('../controllers/db');

async function removeShiftIds(shiftId, eventDate, userId) {
  const queryString = `DELETE FROM events WHERE shift_id=$1 AND event_date=$2 AND user_id=$3`;
  const results = await db.query(queryString, [shiftId, eventDate, userId]);
  console.log("QUERY DB", results)
  return results
}

module.exports = {
  removeShiftIds,
}