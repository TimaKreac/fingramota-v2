const { Schema, model } = require('mongoose')

const testSchema = new Schema(
  {
    questions: [
      {
        question: String,
        option_1: String,
        option_2: String,
        option_3: String,
        option_4: String,
        option_5: String,
        answer: String,
      },
    ],
    category_slug: {
      type: String,
      unique: true,
    },
  },

  { timestamps: true }
)

module.exports = model('Test', testSchema)
