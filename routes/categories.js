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

router.put('/updateAvailability/:user_id', (req, res) => {
  const { startTimeState, endTimeState } = req.body;
  const { user_id } = req.params;
  updateAvailability(user_id, startTimeState, endTimeState)
    .then(() => {
      console.log('update availability completed');
      res.status(200);
    })
    .catch((e) => console.log('router.post update availability: ', e));
});
module.exports = router;
