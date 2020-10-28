const db = require('../controllers/db');

function transferShiftId(userId, shiftId, transferToUserId, event_date) {
  console.log('MODELS shiftId:', shiftId);

  const transferShift = (queryString, shift_id, transferToUserId, event_date) => {
    return db
      .query(queryString, [userId, shift_id, transferToUserId, event_date])
      .then((response) => {
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error('ERROR', err);
      });
  };

  for (const shift_id of shiftId) {
    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2 AND event_date=$4;`;
    transferShift(queryString, shift_id, transferToUserId, event_date);
  }
}

module.exports = {
  transferShiftId,
};
