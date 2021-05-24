const User = require('../models/user.model')
const expressJwt = require('express-jwt')

exports.isAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
})

exports.isAdmin = async (req, res, next) => {
  const adminUserId = req.user.data._id

  const user = await User.findById({ _id: adminUserId })

  if (!user) {
    return res.status(400).json({
      error: 'Пользователь не найден',
    })
  }

  if (user.role !== 'admin') {
    return res.status(400).json({
      error: 'Доступ запрещен',
    })
  }

  req.profile = user
  next()
}
