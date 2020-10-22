const express = require('express');
const manager = require('./manager');
const router = express.Router();
const managers = require('./manager')

// Test code
let users = [
  {
    email: 'test@test.com', password: 'password'
  }
]

module.exports = router
  .get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
  })

  .post('/login', (req,res) => {
    let result = managers.find(manager => manager.email == req.body.email);
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
