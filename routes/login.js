const express = require('express');
// const manager = require('./manager');
const router = express.Router();
const { getLoginCreds } = require('../controllers/users');
 
router.get('/', (req, res) => {
  console.log("WHATEVER")
  res.status(200).json({hello: 'world'})
})

router.post('/', (req, res) => {
  console.log("WTF ARE YOU DOING?", req.body)
  let result = getLoginCreds()
  if(result) {
  
  }
  console.log("Do you give me an array", result)
  res.json({message: "Fuck you! FE"})
})
    // let result = manager.filter(managers => managers.email === req.body.email);

    // console.log("WHAT ARE YOU", result)
    // if(result) {
    //   if(result[0].password === req.body.password) {
    //     res.status(200).send({
    //       message: "Successful login!"
    //     })
    //   } else {
    //     res.status(200).send({
    //       message: "Password Incorrect!"
    //     })
    //   }
    // } else {
    //   res.status(200).send({
    //     message: "User Not found incorrect!"
    //   })
    // }
module.exports = router