const { check } = require('express-validator')

exports.articleCreateValidator = [
  check('title').not().isEmpty().withMessage('Введите имя статьи'),
  check('body')
    .isLength({
      min: 200,
    })
    .withMessage('Длина контента должна быть не менее 200 символов'),
]
