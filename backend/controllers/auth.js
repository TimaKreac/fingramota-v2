const User = require('../models/user')
const argon2 = require('argon2')
const randomBytes = require('randombytes')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  const candidate = await User.findOne({ email })

  if (candidate) {
    return res.status(400).json({
      error: 'Пользователь с такой Эл.почтой уже существует',
    })
  }

  const salt = randomBytes(32)
  const passwordHashed = await argon2.hash(password, { salt })

  const user = await User.create({
    email,
    password: passwordHashed,
    firstName,
    lastName,
    salt: salt.toString('hex'),
  })
  const token = generateJWT(user)
  res.cookie('token', token, {
    maxAge: 31536000000,
    httpOnly: true,
    secure: true,
    sameSite: true,
  })

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
  res.cookie('token', token, {
    maxAge: 31536000000,
    httpOnly: true,
    secure: true,
    sameSite: true,
  })

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
  res.clearCookie('token', {
    maxAge: 31536000000,
    httpOnly: true,
    secure: true,
    sameSite: true,
  })
  res.json({
    message: 'Успешный выход из аккаунта',
  })
}

function generateJWT(user) {
  return jwt.sign(
    {
      data: { _id: user._id, email: user.email },
    },
    process.env.JWT_SECRET,
    { expiresIn: '365d' }
  )
}
