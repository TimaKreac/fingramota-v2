const Article = require('../models/article.model')
const Category = require('../models/category.model')
const slugify = require('slugify')
const { stripHtml } = require('string-strip-html')
const { errorHandler } = require('../helpers/dbErrorHandler')
const formidable = require('formidable')

exports.getAll = async (req, res) => {
  try {
    const { category_slug } = req.params
    const category = await Category.findOne({ slug: category_slug })
    const articles = await Article.find({ category: category._id })
      .populate({
        path: 'category',
        select: 'name slug',
      })
      .select('title slug category')
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
    const { category_slug, article_slug } = req.params
    const category = await Category.findOne({ slug: category_slug })
    const article = await Article.findOne({
      slug: article_slug,
      category: category._id,
    })
    res.json(article)
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
      message: 'Ошибка при получении статьи',
    })
  }
}

exports.create = async (req, res) => {
  let form = new formidable.IncomingForm()

  form.parse(req, async (err, fields, files) => {
    const { title, body, category_slug } = fields

    const category = await Category.findOne({ slug: category_slug })

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
    res.json(article)

    category.articles.push(article._id)
    category.save()

    res.status(201).json(article)
  })
}
