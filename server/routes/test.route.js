const express = require('express')
const router = express.Router()
const { isAuth, isAdmin } = require('../middlewares/user.middleware')
const { getOne, create } = require('../controllers/test.controller')

router.get('/:category_slug/test', isAuth, getOne)

router.post('/:category_slug/test', isAuth, isAdmin, create)

module.exports = router
