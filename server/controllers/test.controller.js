const Test = require('../models/test.model')

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
