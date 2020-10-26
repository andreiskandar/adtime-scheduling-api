const express = require('express');
const router = express.Router();
const { publishWeek, grabShiftId } = require('../controllers/events');

// //GET all Events
// router.get('/events/', (req, res) => {
//   getShiftsByWeek()
//     .then((data) => {
//       res.json({ data });
//     })
//     .catch((e) => console.log('getShiftsByWeek: ', e));
// });

//PUT updates event status
router.put('/', (req, res) => {
  const { publish, firstDay, lastDay } = req.body;
  publishWeek(publish, firstDay, lastDay).catch((e) => console.log('publishWeek ERROR', e));
});

// DELETE specific or many event_shifts
// /api/events/remove
router.delete('/', async (req, res) => {
  try {
    const { shiftId, eventDate, userId } = req.query;
    console.log('userId:', userId);
    console.log('eventDate:', eventDate);
    console.log('shiftId:', shiftId);
    const test = await grabShiftId(shiftId, eventDate, userId);
    res.status(200).json({});
  } catch (err) {
    console.error('RemoveShiftIdRoute:', err);
    res.status(401).json({ msg: 'Invalid Shift IDs' });
  }
});

module.exports = router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userController.authenticate(email, password);
    res.status(200).json(user);
  } catch (err) {
    console.error('LoginRoute:', err);
    res.status(401).json({ msg: 'Invalid credentials' });
  }
});
module.exports = router;
