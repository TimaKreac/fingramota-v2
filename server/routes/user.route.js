const express = require('express')
const router = express.Router()
const {
  signup,
  signin,
  signout,
  getUserRole,
} = require('../controllers/user.controller')
const { isAuth } = require('../middlewares/user.middleware')

// validators
const { runValidation } = require('../validators')
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validators/user.validator')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.post('/signout', signout)

router.get('/user', isAuth, getUserRole)

module.exports = router
