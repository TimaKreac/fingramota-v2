const { Schema, model, Types } = require('mongoose')

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    articles: [{ type: Types.ObjectId, ref: 'Article' }],
  },
  { timestamps: true }
)

module.exports = model('Category', categorySchema)
