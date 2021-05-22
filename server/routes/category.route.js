const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/auth')
const {
  getOne,
  getAll,
  create,
  update,
} = require('../controllers/category.controller')

// validators

router.get('/category', getAll)

router.get('/category/:slug', getOne)

router.post('/category', isAuth, isAdmin, create)

module.exports = router
