const express = require('express');
const manager = require('./manager');
const router = express.Router();

module.exports = router
  .get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
  })

  .post('/', (req,res) => {
    let result = manager.find(managers => managers.email == req.body.email);
    console.log("WHAT ARE YOU", result)
    if(result) {
      if(result.password == req.body.password) {
        res.status(200).send({
          message: "Successful login!"
        })
      } else {
        res.status(200).send({
          message: "Password Incorrect!"
        })
      }
    } else {
      res.status(200).send({
        message: "User Not found incorrect!"
      })
    }
  })
