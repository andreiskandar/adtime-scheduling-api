const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts');

//GET /users
router.get('/', (req, res) => {
  getAllShifts()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getAllShifts: ', e));
});

module.exports = router;
