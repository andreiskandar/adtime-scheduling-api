const db = require('../controllers/db');

function transferShiftId(userId, shiftId, transferToId, category_id) {
  const transferShift = (queryString, shift_id, transferToId, category_id) => {
    return  db.query(queryString, [userId, shift_id, transferToId])
      .then((response) => {
        console.log("WHERE AM I QUERY", response.rows)
        // console.log(res.json({response}))
        return true;
      })
      .catch((err) => {
        console.error("ERROR", err)
      })
  }
  for (const shift_id of shiftId) {
    console.log("SHIFTID IDID I", shift_id)

    const queryString = `UPDATE events SET user_id=$3 WHERE user_id=$1 AND shift_id=$2`;
    transferShift(queryString, shift_id, transferToId, category_id)    
  }
}

module.exports = {
  transferShiftId
}