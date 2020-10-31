const moment = require('moment');

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

module.exports = { MOMENT_DICT, getDatesArray, getUnavailableShiftIdsArray };
