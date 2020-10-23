const express = require('express');
// const manager = require('./manager');
const router = express.Router();
const bodyParser = require("body-parser")
router.use(bodyParser.urlencoded({ extended: false }));
const { getAllUsers, getUserById } = require('../controllers/users')

module.exports = router
  .get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
  })

  .post('/', (req,res) => {
    console.log("Do you give me body", req.body)
    // const manager = [
    //   {
    //     id: 1,
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'test@test.com',
    //     password: 'password',
    //   },
    //   {
    //     id: 2,
    //     firstName: 'Bob',
    //     lastName: 'Doe',
    //     email: 'test2@test.com',
    //     password: 'password',
    //   },
    // ]
    let result = manager.filter(managers => managers.email === req.body.email);

    console.log("WHAT ARE YOU", result)
    if(result) {
      if(result[0].password === req.body.password) {
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
