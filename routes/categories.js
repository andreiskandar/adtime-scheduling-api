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
  updateAvailability(user_id, startTimeState, endTimeState).then().catch();
});
module.exports = router;
