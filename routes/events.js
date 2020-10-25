const express = require('express');
const router = express.Router();
const { getShiftsByUser, publishWeek } = require('../controllers/events');

// //GET all Events
// router.get('/events/', (req, res) => {
//   getShiftsByUser()
//     .then((data) => {
//       res.json({ data });
//     })
//     .catch((e) => console.log('getShiftsByUser: ', e));
// });

//PUT updates event status
router.put('/', (req, res) => {
  const {publish, firstDay, lastDay} = req.body
  publishWeek(publish, firstDay, lastDay)
  .catch((e) => console.log('publishWeek ERROR', e));
});

module.exports = router;
