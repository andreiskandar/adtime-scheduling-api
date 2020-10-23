const express = require('express');
// const manager = require('./manager');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

router.post('/', (req, res) => {
  console.log('login routes');
  res.json({ message: 'message' });
});

module.exports = router;
