const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee')

module.exports = router
  .get('/', (req, res) => {
    // req.params.username
    const model = employee.get()
    res.status(200).json(model)
  })
