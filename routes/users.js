const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/users')

//GET /users
router.get('api/users', (req, res) => {
  console.log(req)  
  getAllUsers()
      .then((users) => {
        res.json({ users })
      })
});

//GET /users/:id
router.get('api/users/:id', (req, res) => {
  getUserById(req.params)
    .then((user) => {
      res.json({ user })
    })
});

module.exports = router;