const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/auth')
const { getAll, getOne, create } = require('../controllers/article.controller')

// validators
const { runValidation } = require('../validators')
const { articleCreateValidator } = require('../validators/article.validator')

router.get('/article', getAll)

router.get('/article/:slug', getOne)

router.post(
  '/article',
  articleCreateValidator,
  runValidation,
  isAuth,
  isAdmin,
  create
)

module.exports = router
