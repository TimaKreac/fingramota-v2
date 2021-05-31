const Article = require('../models/article.model')
const Category = require('../models/category.model')
const slugify = require('slugify')
const { stripHtml } = require('string-strip-html')
const formidable = require('formidable')

exports.getAll = async (req, res) => {
  try {
    const { categorySlug } = req.params
    const category = await Category.findOne({ slug: categorySlug })
    const articles = await Article.find({ category: category._id })
      .populate({
        path: 'category',
        select: 'name slug',
      })
      .select('title slug category')
    res.json(articles)
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при получении статей',
    })
  }
}

exports.getOne = async (req, res) => {
  try {
    const { categorySlug, articleSlug } = req.params
    const category = await Category.findOne({ slug: categorySlug })
    const article = await Article.findOne({
      slug: articleSlug,
      category: category._id,
    })
    res.json(article)
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при получении статьи',
    })
  }
}

exports.create = async (req, res) => {
  try {
    let form = new formidable.IncomingForm()

    form.parse(req, async (err, fields, files) => {
      const { title, body, categorySlug } = fields

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
      res.json(article)

      category.articles.push(article._id)
      category.save()

      res.status(201).json(article)
    })
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при создании статьи',
    })
  }
}

exports.remove = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Article.findByIdAndDelete(id)

    res.json(article)
  } catch (error) {
    res.status(400).json({
      error,
      message: 'Ошибка при удалении статьи',
    })
  }
}
