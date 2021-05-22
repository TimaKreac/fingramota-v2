const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/auth')
const { getAll, getOne, create } = require('../controllers/article.controller')

// validators

router.get('/article', getAll)

router.get('/article/:slug', getOne)

router.post('/article', isAuth, isAdmin, create)

module.exports = router
