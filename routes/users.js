const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByName } = require('../controllers/users');

//GET /users
router.get('/', (req, res) => {
  getAllUsers()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => console.log('getAllUsers error: ', e));
});

//GET /api/users/:id
router.get('/:id', (req, res) => {
  getUserByName(req.params.id).then((data) => {
    res.send(data);
  });
});

module.exports = router;
