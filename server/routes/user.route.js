const express = require('express')
const router = express.Router()
const {
  signup,
  signin,
  signout,
  getUser,
} = require('../controllers/user.controller')

// validators
const { runValidation } = require('../validators')
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validators/user.validator')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.post('/signout', signout)

module.exports = router
