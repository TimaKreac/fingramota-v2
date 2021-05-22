const { check } = require('express-validator')

exports.userSignupValidator = [
  check('email').isEmail().withMessage('Введите корректный Эл.адрес'),
  check('password')
    .isLength({
      min: 8,
    })
    .withMessage('Длина пароля должна быть не менее 8 символов'),
  check('firstName').not().isEmpty().withMessage('Введите Имя'),
  check('lastName').not().isEmpty().withMessage('Введите Фамилию'),
]

exports.userSigninValidator = [
  check('email').isEmail().withMessage('Введите корректный Эл.адрес'),
]
