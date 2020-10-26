const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts');
const { getShiftsByWeek, publishWeek } = require('../controllers/events');

//GET /users
router.get('/', (req, res) => {
  getAllShifts()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getAllShifts: ', e));
});

router.get('/events/', (req, res) => {
  getShiftsByWeek()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getShiftsByWeek: ', e));
});

router.get;
module.exports = router;
