const Test = require('../models/test.model')
const User = require('../models/user.model')

exports.getOne = async (req, res) => {
  try {
    const { category_slug } = req.params
    const test = await Test.findOne({ category_slug })

    res.json(test)
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при получении теста',
    })
  }
}

exports.create = async (req, res) => {
  try {
    const { questions } = req.body
    const { category_slug } = req.params

    const test = await Test.create({
      questions,
      category_slug,
    })

    res.json(test)
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при создании теста',
    })
  }
}

exports.finish = async (req, res) => {
  try {
    const { percentCorrect, category_slug } = req.body

    const user = await User.findById(req.user.data._id)

    user.completed_tests.push({ category_slug, percentCorrect })

    await user.save()

    res.json('Тест успешно завершен')
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при завершении теста',
    })
  }
}
