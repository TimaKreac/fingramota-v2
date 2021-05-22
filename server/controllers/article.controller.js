const Article = require('../models/article.model')
const Category = require('../models/category.model')
const slugify = require('slugify')
const { stripHtml } = require('string-strip-html')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.getAll = async (req, res) => {
  try {
    const articles = await Article.find({})
    res.json(articles)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при получении статей',
    })
  }
}

exports.getOne = async (req, res) => {
  try {
    const { slug } = req.params
    const article = await Article.findOne({ slug })
    res.json(article)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при получении статьи',
    })
  }
}

exports.create = async (req, res) => {
  try {
    const { title, body, categorySlug } = req.body

    const category = await Category.findOne({ slug: categorySlug })

    let categoryId
    if (category) {
      categoryId = category._id
    }

    const slug = slugify(title, {
      lower: true,
      locale: 'ru',
    })
    const article = await Article.create({
      title,
      slug,
      body,
      categoryId,
      mtitle: `${title} | ${process.env.APP_NAME}`,
      mdesc: stripHtml(body.substring(0, 160)).result,
      category: categoryId,
    })

    category.articles.push(article._id)
    category.save()

    res.status(201).json(article)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при создании статьи',
    })
  }
}
