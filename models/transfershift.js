const db = require('../controllers/db');

function transferShiftId(userId, shiftId, transferToId, event_date, category_id) {
  const transferShift = (queryString, shift_id, transferToId, event_date, category_id) => {
    return db
      .query(queryString, [userId, shift_id, transferToId, event_date, category_id])
      .then((response) => {
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error('ERROR', err);
      });
  };
  for (const shift_id of shiftId) {
    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2 AND event_date=$4 AND category_id=$5`;
    console.log('queryString:', queryString);
    transferShift(queryString, shift_id, transferToId, event_date, category_id);
  }
}

module.exports = {
  transferShiftId,
};
