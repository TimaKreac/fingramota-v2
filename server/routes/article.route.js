const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/user.middleware')
const { getAll, getOne, create } = require('../controllers/article.controller')

// validators
const { runValidation } = require('../validators')
const { articleCreateValidator } = require('../validators/article.validator')

router.get('/article/:category_slug', getAll)

router.get('/article/:category_slug/:article_slug', getOne)

router.post(
  '/article',
  articleCreateValidator,
  runValidation,
  isAuth,
  isAdmin,
  create
)

module.exports = router
