const { Schema, model, Types } = require('mongoose')

const articleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      min: 3,
      max: 160,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    body: {
      type: {},
      required: true,
      min: 200,
      max: 2000000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },
    category: {
      type: Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true }
)

module.exports = model('Article', articleSchema)
