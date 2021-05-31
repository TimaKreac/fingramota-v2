const Test = require('../models/test.model')
const User = require('../models/user.model')

exports.getOne = async (req, res) => {
  try {
    const { categorySlug } = req.params
    const test = await Test.findOne({ categorySlug })

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
    const { categorySlug } = req.params

    const test = await Test.create({
      questions,
      categorySlug,
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
    const { percentCorrect, categorySlug } = req.body

    const user = await User.findById(req.user.data._id)

    const isExists = user.completedTests.find((el) => {
      return categorySlug === el.categorySlug
    })

    if (isExists) {
      return res.status(400).json({
        error: 'Такой тест уже был пройден',
      })
    }

    user.completedTests.push({ categorySlug, percentCorrect })

    await user.save()

    res.json('Тест успешно завершен')
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при завершении теста',
    })
  }
}
