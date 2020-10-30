const db = require('./db');

const getCategories = () => {
  return db.query('Select * FROM categories;').then((res) => {
    return res.rows;
  });
};

const updateAvailability = () => {
  //all the days and start time and end time
  //structure startTime or EndTime
  const startTimeId = { Friday: 0, Monday: 0, Saturday: 0, Sunday: 0, Thursday: 0, Tuesday: 0, Wednesday: 0 };

  // create a function to find the first monday, or tuesday
  // find the next mondays, tuesdays...
  // insert statement to database
  //
};

module.exports = { getCategories, updateAvailability };
