const db = require('./db');
const { getDatesArray, getUnavailableShiftIdsArray } = require('../helpers/helpers');

const getCategories = () => {
  return db.query('Select * FROM categories;').then((res) => {
    return res.rows;
  });
};

const updateAvailability = (user_id, startTime, endTime) => {
  const unavailableShiftIds = Object.keys(startTime).reduce((acc, cur, idx) => {
    const idsArray = getUnavailableShiftIdsArray(startTime[cur], endTime[cur]);
    acc[cur] = idsArray.length === 12 ? [] : idsArray;
    return acc;
  }, {});

  const addPromises = [];

  for (const day in unavailableShiftIds) {
    if (unavailableShiftIds[day].length !== 0) {
      const dates = getDatesArray(4, day);
      const updateAvailabilityQuery = dates.map((date) => {
        const addFunction = (queryString, shiftId) => {
          return db
            .query(queryString, [user_id, shiftId])
            .then((response) => {
              return response.rows;
            })
            .catch((e) => console.log('error from updateAvailability query', e));
        };
        for (const shiftId of unavailableShiftIds[day]) {
          const queryString = `
          INSERT INTO events (user_id, shift_id, category_id, event_date)
          VALUES ($1::integer, $2::integer, 5, '${date}T${shiftId + 8}:00:00');`;
          addPromises.push(addFunction(queryString, shiftId));
        }
      });
    }
  }

  return Promise.all(addPromises);
};
module.exports = { getCategories, updateAvailability };
