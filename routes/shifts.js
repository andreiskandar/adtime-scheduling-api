const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts');
const { getShiftsByWeekManager, getShiftsByWeekEmployee } = require('../controllers/events');

//GET /users
router.get('/', (req, res) => {
  getAllShifts()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getAllShifts: ', e));
});

router.get('/events/manager', (req, res) => {
  const firstDay = req.query.firstDay
  const lastDay = req.query.lastDay
  getShiftsByWeekManager(firstDay, lastDay)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log('getShiftsByWeekManager: ', e));
});

router.get('/events/employee', (req, res) => {
  const firstDay = req.query.firstDay
  const lastDay = req.query.lastDay
  
  getShiftsByWeekEmployee(firstDay, lastDay)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.log('getShiftsByWeekEmployee: ', e));
});

router.get;
module.exports = router;
