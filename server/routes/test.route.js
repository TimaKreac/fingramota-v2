const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/user.middleware')
const { getOne, create, finish } = require('../controllers/test.controller')

router.get('/test/:categorySlug', isAuth, getOne)

router.post('/test/:categorySlug', isAuth, isAdmin, create)

router.post('/test/finish', isAuth, finish)

module.exports = router
