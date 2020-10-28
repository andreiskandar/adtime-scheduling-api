const db = require('../controllers/db');

function transferShiftId(userId, shiftId, transferToUserId, event_date, category_id) {
  console.log('MODELS shiftId:', shiftId);

  const transferShift = (queryString, shift_id, transferToUserId, event_date, category_id) => {
    return db
      .query(queryString, [userId, shift_id, transferToUserId, event_date, category_id])
      .then((response) => {
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error('ERROR', err);
      });
  };

  for (const shift_id of shiftId) {
    console.log('from MODELS for LOOP shift_id:', shift_id);
    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2 AND event_date=$4 AND category_id=$5;`;
    console.log('queryString:', queryString);
    transferShift(queryString, shift_id, transferToUserId, event_date, category_id);
  }
}

module.exports = {
  transferShiftId,
};
