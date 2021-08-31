const express = require('express');
const path = require('path');
const userRouter = express.Router();
const userController = require('../Controllers/userController')

// creating an account
userRouter.get('/signup',(req, res) => {
  res.send(200)
  res.render(console.log('ok we got to this part just fine')) //<---I think this would render our actual signup page
})

// logging in
userRouter.post('/signup', userController.createUser, (req, res) => {
  res.status(200)
  res.render(console.log('hi hello this works')) //<--- would this render the next page/component?    
})

userRouter.post()
module.export = userRouter;