const express = require('express');
const router = express.Router();
const { getAllShifts } = require('../controllers/shifts')

//GET /users
router.get('/', (req, res) => {
  console.log(req)  
  getAllShifts()
      .then((data) => {
        // console.log(users)
        res.json({ data })
      })
});

module.exports = router;