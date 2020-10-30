const db = require('./db');
const moment = require('moment');
const getCategories = () => {
  return db.query('Select * FROM categories;').then((res) => {
    return res.rows;
  });
};

const getDates = () => {};

const getUnavailableShiftIdsArray = (start_time, end_time) => {
  const shift_id = [];
  const unavailable_shift_ids = [];

  const startTime = parseInt(start_time);
  const endTime = parseInt(end_time);

  for (let i = startTime; i < endTime; i++) {
    shift_id.push(i - 8);
  }

  for (let i = 1; i <= 12; i++) {
    if (!shift_id.includes(i)) {
      unavailable_shift_ids.push(i);
    }
  }
  return unavailable_shift_ids;
};

const updateAvailability = (user_id, startTime, endTime) => {
  const parseStartTime = JSON.parse(startTime);
  const parseEndTime = JSON.parse(endTime);

  const unavailableShiftIds = Object.keys(parseStartTime).reduce((acc, cur, idx) => {
    acc[cur] = getUnavailableShiftIdsArray(parseStartTime[cur], parseEndTime[cur]);
    return acc;
  }, {});
  console.log('unavailableShiftIds:', unavailableShiftIds);

  console.log('MONDAY');
  console.log('getDates: ', moment().day(1));
  console.log('getDates: ', moment().day(8));
  console.log('getDates: ', moment().day(15));
  console.log('getDates: ', moment().day(22));
  console.log('getDates: ', moment().day(29));
  console.log('====================');
  // console.log('TUESDAY');
  // console.log('getDates: ', moment().day(2));
  // console.log('getDates: ', moment().day(9));
  // console.log('getDates: ', moment().day(16));
  // console.log('getDates: ', moment().day(23));
  // console.log('getDates: ', moment().day(30));
  // console.log('====================');
  // console.log('WEDNESDAY');
  // console.log('getDates: ', moment().day(3));
  // console.log('getDates: ', moment().day(10));
  // console.log('getDates: ', moment().day(17));
  // console.log('getDates: ', moment().day(24));
  // console.log('getDates: ', moment().day(31));
  // console.log('====================');
  // console.log('THURSDAY');
  // console.log('getDates: ', moment().day(4));
  // console.log('getDates: ', moment().day(11));
  // console.log('getDates: ', moment().day(18));
  // console.log('getDates: ', moment().day(25));
  // console.log('getDates: ', moment().day(32));
  // console.log('====================');
  // console.log('FRIDAY');
  // console.log('getDates: ', moment().day(5));
  // console.log('getDates: ', moment().day(12));
  // console.log('getDates: ', moment().day(19));
  // console.log('getDates: ', moment().day(26));
  // console.log('getDates: ', moment().day(33));
  // console.log('====================');
  // console.log('SATURDAY');
  // console.log('getDates: ', moment().day(6));
  // console.log('getDates: ', moment().day(13));
  // console.log('getDates: ', moment().day(20));
  // console.log('getDates: ', moment().day(27));
  // console.log('getDates: ', moment().day(34));
  // console.log('====================');
  // console.log('SUNDAY');
  // console.log('getDates: ', moment().day(7));
  // console.log('getDates: ', moment().day(14));
  // console.log('getDates: ', moment().day(21));
  // console.log('getDates: ', moment().day(28));
  // console.log('getDates: ', moment().day(35));
  // console.log('parseStartTime:', parseStartTime);
  // console.log('parseEndTime:', parseEndTime);
  // console.log('user_id:', user_id);

  //all the days and start time and end time
  //structure startTime or EndTime
  // get shift_ids that are not available
  // create a function to find the first monday, or tuesday
  // find the next mondays, tuesdays...
  // insert statement to database
  //
};

module.exports = { getCategories, updateAvailability };
