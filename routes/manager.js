const express = require('express');
const router = express.Router();

module.exports = router
  .get('/', (req, res) => {
    const employees = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Doe',
      },
    ]
    res.status(200).json(employees)
  })
