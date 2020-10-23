const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/users')

//GET /users

// module.exports = router
//   .get('/', (req, res) => {
//     res.status(200).json({hello: 'world'})
//   })

//GET /api/users
router.get('/', (req, res) => {
  getAllUsers()
    .then((users) => {
      res.status(200).json({ users })
    })
});

//GET /api/users/:id
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json({ user })
    })
});

module.exports = router;