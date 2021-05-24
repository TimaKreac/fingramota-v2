const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/user.middleware')
const {
  getOne,
  getAll,
  create,
  update,
} = require('../controllers/category.controller')

// validators
const { runValidation } = require('../validators')
const { categoryCreateValidator } = require('../validators/category.validator')

router.get('/category', getAll)

router.get('/category/:slug', getOne)

router.post(
  '/category',
  categoryCreateValidator,
  runValidation,
  isAuth,
  isAdmin,
  create
)

module.exports = router
