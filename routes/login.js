const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

module.exports = router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('req.body:', req.body);
    const user = await userController.authenticate(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ msg: 'Invalid credentials' });
  }
});
