const { check } = require('express-validator')

exports.categoryCreateValidator = [
  check('name').not().isEmpty().withMessage('Введите имя категории'),
  check('slug').not().isEmpty().withMessage('Введите slug категории'),
]
