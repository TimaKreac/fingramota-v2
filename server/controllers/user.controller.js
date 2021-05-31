const User = require('../models/user.model')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const Cookies = require('cookies')

const ONE_YEAR = 31536000000

const tokenOptions = {
  maxAge: ONE_YEAR,
  expires: new Date(Date.now() + ONE_YEAR),
  httpOnly: true,
  sameSite: true,
}

exports.updateUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  const user = await User.findOneAndUpdate(
    { email },
    { password, firstName, lastName }
  )

  if (!user) {
    return res.status(400).json({
      error: 'Пользователь не найден',
    })
  }

  return res.json(user)
}

exports.getUser = async (req, res) => {
  const userId = req.user.data._id

  const user = await User.findById(userId).select('role completedTests')

  if (!user) {
    return res.status(400).json({
      error: 'Пользователь не найден',
    })
  }

  return res.json(user)
}

exports.signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  const cookies = new Cookies(req, res)

  const candidate = await User.findOne({ email })

  if (candidate) {
    return res.status(400).json({
      error: 'Пользователь с такой Эл.почтой уже существует',
    })
  }

  const passwordHashed = await argon2.hash(password)

  const user = await User.create({
    email,
    password: passwordHashed,
    firstName,
    lastName,
  })
  const token = generateJWT(user)
  cookies.set('token', token, tokenOptions)

  res.status(201).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    token,
    message: 'Аккаунт успешно создан',
  })
}

exports.signin = async (req, res) => {
  const { email, password } = req.body

  const cookies = new Cookies(req, res)

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(400).json({
      error: 'Пользователя с такой Эл.почтой не существует',
    })
  }

  const correctPassword = await argon2.verify(user.password, password)

  if (!correctPassword) {
    return res.status(400).json({
      error: 'Неверный пароль',
    })
  }

  const token = generateJWT(user)
  cookies.set('token', token, tokenOptions)

  res.json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    token,
    message: 'Успешная авторизация',
  })
}

exports.signout = (req, res) => {
  const cookies = new Cookies(req, res)
  cookies.set('token', { expires: Date.now() })
  res.json({
    message: 'Успешный выход из аккаунта',
  })
}

function generateJWT(user) {
  const { _id, email } = user
  return jwt.sign(
    {
      data: { _id, email },
    },
    process.env.JWT_SECRET,
    { expiresIn: '365d' }
  )
}
