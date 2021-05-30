const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/user.middleware')
const { getOne, create, finish } = require('../controllers/test.controller')

router.get('/:category_slug/test', isAuth, getOne)

router.post('/:category_slug/test', isAuth, isAdmin, create)

router.post('/test/finish', isAuth, finish)

module.exports = router
