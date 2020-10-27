const db = require('./db');

const getCategories = () => {
  return db.query('Select * FROM categories;').then((res) => {
    return res.rows;
  });
};

module.exports = { getCategories };
