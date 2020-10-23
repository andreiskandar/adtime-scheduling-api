const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/users');

//GET /users
router.get('/', (req, res) => {
  getAllUsers()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((e) => console.log('getAllUsers error: ', e));
});

//GET /users/:id
router.get('/:id', (req, res) => {
  getUserById(req.params.id).then((user) => {
    res.json({ user });
  });
});

module.exports = router;
