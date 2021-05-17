const express = require('express')
const router = express.Router()
const { signup, signin, signout } = require('../controllers/auth')
const { isAuth, isAdmin } = require('../middlewares/auth')

// validators
const { runValidation } = require('../validators')
const {
  userSignupValidator,
  userSigninValidator,
} = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.post('/signout', signout)

router.post('/test', isAuth, isAdmin, (req, res) => {
  res.json({
    cookies: req.cookies,
    user: req.user,
  })
})

module.exports = router
