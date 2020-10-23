const express = require('express');
// const manager = require('./manager');
const router = express.Router();
const { getLoginCreds } = require('../controllers/users');

router.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

router.post('/', (req, res) => {
  console.log('WTF ARE YOU DOING?', req.body);
  let result = getLoginCreds();
  if (result) {
  }
  console.log('Do you give me an array', result);
  res.json({ message: 'Fuck you! FE' });
});
// let result = manager.filter(managers => managers.email === req.body.email);

module.exports = router;
