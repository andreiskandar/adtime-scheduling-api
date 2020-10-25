const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts');
const { getShiftsByUser, publishWeek } = require('../controllers/events');

//GET /users
router.get('/', (req, res) => {
  getAllShifts()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getAllShifts: ', e));
});

router.get('/events/', (req, res) => {
  getShiftsByUser()
    .then((data) => {
      res.json({ data });
    })
    .catch((e) => console.log('getShiftsByUser: ', e));
});

router.get;
module.exports = router;
