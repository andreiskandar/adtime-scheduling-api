const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts');
const { getShiftsByWeek } = require('../controllers/events');

//GET /users
router.get('/', (req, res) => {
  getAllShifts()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getAllShifts: ', e));
});

router.get('/events/', (req, res) => {
  const firstDay = req.query.firstDay
  const lastDay = req.query.lastDay
  console.log(firstDay, lastDay)
  getShiftsByWeek(firstDay, lastDay)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log('getShiftsByWeek: ', e));
});

router.get;
module.exports = router;
