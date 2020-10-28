const db = require('../controllers/db');

<<<<<<< HEAD
function transferShiftId(userId, shiftId, transferToId, category_id) {
  const transferShift = (queryString, shift_id, transferToId, category_id) => {
    return  db.query(queryString, [userId, shift_id, transferToId])
=======
function transferShiftId(userId, shiftId, transferToId, event_date, category_id) {
  const transferShift = (queryString, shift_id, transferToId, event_date, category_id) => {
    return db
      .query(queryString, [userId, shift_id, transferToId, event_date, category_id])
>>>>>>> master
      .then((response) => {
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error('ERROR', err);
      });
  };
  for (const shift_id of shiftId) {
<<<<<<< HEAD
    console.log("SHIFTID IDID I", shift_id)

    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2`;
    transferShift(queryString, shift_id, transferToId, category_id)    
=======
    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2 AND event_date=$4 AND category_id=$5`;
    console.log('queryString:', queryString);
    transferShift(queryString, shift_id, transferToId, event_date, category_id);
>>>>>>> master
  }
}

module.exports = {
  transferShiftId,
};
