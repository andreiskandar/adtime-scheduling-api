const express = require('express');
const router = express.Router();
const { getCategories } = require('../controllers/categories');

router.get('/', (req, res) => {
  getCategories()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log('getCategories', e);
    });
});

module.exports = router;
