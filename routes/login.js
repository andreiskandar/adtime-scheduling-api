const express = require('express');
// const manager = require('./manager');
const router = express.Router();
const { getLoginCreds } = require('../controllers/users');

router.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

router.post('/', (req, res) => {
<<<<<<< HEAD
  console.log("WTF ARE YOU DOING?", req.body)
  console.log(req.body.email)
  console.log(req.body.password)
  getLoginCreds(req.body.email, req.body.password)
    .then((response) => {
      console.log("Do you give me an array", response.rows[0])
      res.json({message: "Fuck you! FE"})
    })
})
    // let result = manager.filter(managers => managers.email === req.body.email);
=======
  console.log('WTF ARE YOU DOING?', req.body);
  console.log(req.body.email);
  console.log(req.body.password);
  getLoginCreds(req.body.email, req.body.password).then((response) => {
    console.log('Do you give me an array', response.rows[0]);
    res.json({ message: 'Fuck you! FE' });
  });
});
// let result = manager.filter(managers => managers.email === req.body.email);
>>>>>>> master

module.exports = router;
