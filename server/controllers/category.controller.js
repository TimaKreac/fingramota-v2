const Category = require('../models/category.model')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.json(categories)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при получении категорий',
    })
  }
}

exports.getOne = async (req, res) => {
  try {
    const { slug } = req.params
    const category = await Category.findOne({ slug }).populate(
      'articles',
      'title slug'
    )
    res.json(category)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при получении категории',
    })
  }
}

exports.create = async (req, res) => {
  try {
    const { name, slug } = req.body

    const category = await Category.create({
      name,
      slug,
    })

    res.status(201).json(category)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при создании категории',
    })
  }
}
