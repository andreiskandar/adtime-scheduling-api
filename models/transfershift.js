const db = require('../controllers/db');

function transferShiftId(userId, shiftId, transferToUserId, event_date) {
  console.log('MODELS shiftId:', shiftId);

  const transferShift = (queryString, shift_id, transferToUserId) => {
    return db
      .query(queryString, [userId, shift_id, transferToUserId])
      .then((response) => {
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error('ERROR', err);
      });
  };

  for (const shift_id of shiftId) {
    const queryString = `
    UPDATE events SET user_id=$3 
    WHERE user_id=$1 AND shift_id=$2 AND event_date='${event_date} ${parseInt(shift_id) + 8}:00:00';`;
    transferShift(queryString, shift_id, transferToUserId);
  }
}

module.exports = {
  transferShiftId,
};
