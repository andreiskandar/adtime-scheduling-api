const db = require('./db');
const moment = require('moment');
const getCategories = () => {
  return db.query('Select * FROM categories;').then((res) => {
    return res.rows;
  });
};

const MOMENT_DICT = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
};
const getDatesArray = (numOfWeeks, day) => {
  //whichDay (0 - sunday, 1 - monday, .....)
  const dates = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    const date = moment()
      .isoWeekday(MOMENT_DICT[day] + i * 7)
      .format(moment.HTML5_FMT.DATE);
    dates.push(date);
  }

  return dates;
};

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
    const idsArray = getUnavailableShiftIdsArray(parseStartTime[cur], parseEndTime[cur]);
    acc[cur] = idsArray.length === 12 ? [] : idsArray;
    return acc;
  }, {});

  for (const day in unavailableShiftIds) {
    if (unavailableShiftIds[day].length !== 0) {
      const dates = getDatesArray(4, day);
      const updateAvailabilityQuery = dates.map((date) => {
        const addFunction = (queryString, shiftId) => {
          return db.query(queryString, [user_id, shiftId]).then((response) => {
            return response.rows;
          });
        };
        for (const shiftId of unavailableShiftIds[day]) {
          const queryString = `
          INSERT INTO events (user_id, shift_id, category_id, event_date)
          VALUES ($1::integer, $2::integer, 5, '${date}T${shiftId + 8}:00:00');`;
          addFunction(queryString, shiftId);
        }
      });
    }
  }

  // Monday work from 12:00 - 17:00
  // Tuesday work from 09:00 - 12:00
  // Wednesday work from 10:00 - 18:00
  // Thursday - Sunday available to work anytime

  // unavailableShiftIds =
  // {
  // Monday: [ 1, 2, 3, 9, 10, 11, 12 ],
  // Tuesday: [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
  // Wednesday: [ 1, 10, 11, 12 ],
  // Thursday: [],
  // Friday: [],
  // Saturday: [],
  // Sunday: []
  // }

  //getDates(4 weeks, monday) : [ '2020-11-02', '2020-11-09', '2020-11-16', '2020-11-23' ]

  //all the days and start time and end time
  //structure startTime or EndTime
  // get shift_ids that are not available based on user input
  // create a function to find the first monday, or tuesday
  // find the next mondays, tuesdays...
  // insert statement to database
  //
};

module.exports = { getCategories, updateAvailability };
