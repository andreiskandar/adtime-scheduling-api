const express = require('express');
const router = express.Router();
const { publishWeek, grabShiftId } = require('../controllers/events');
const cancelController = require('../controllers/events')
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

//ADD EVENTS 
router.post('/', async (req, res) => {
  try { 
    const {user_id, shift_id, category_id, event_date} = req.body
    const add = await addShiftsByUser(user_id, shift_id, category_id, event_date)
    res.status(200).json(add)
  } catch(err) {
    console.error('addEvents ERROR:', err)
    res.status(400).json({msg: 'Not sure what you are trying to accomplish...'})
  }
});

// DELETE specific or many event_shifts
// /api/events/remove
router.delete('/', async (req,res) => {
  try {
    const {shiftId, eventDate, userId} = req.query

    const cancelShift = await grabShiftId(shiftId, eventDate, userId)
    console.log("TEST TEST", cancelShift)
    res.status(200).send('OKAY')
  } catch(err) {
    console.error('RemoveShiftIdRoute:', err)
    res.status(401).json({msg: "Invalid Shift IDs"})
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
