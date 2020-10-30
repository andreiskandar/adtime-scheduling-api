const express = require('express');
const router = express.Router();
const { getCategories, updateAvailability } = require('../controllers/categories');

router.get('/', (req, res) => {
  getCategories()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log('getCategories', e);
    });
});

router.get('/updateAvailability/:user_id', (req, res) => {
  const { startTimeState, endTimeState } = req.query;
  const { user_id } = req.params;
  console.log('endTimeState:', JSON.parse(endTimeState));
  console.log('startTimeState:', JSON.parse(startTimeState));
  console.log('user_id:', user_id);

  updateAvailability(user_id, startTimeState, endTimeState).then().catch();
});
module.exports = router;
