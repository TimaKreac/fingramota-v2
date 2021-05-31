const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },

    role: {
      type: String,
      default: 'user',
    },

    resetPasswordLink: {
      data: String,
      default: '',
    },

    photo: {
      type: String,
      default: '/standart-avatar.png',
    },

    completedTests: [
      {
        categorySlug: {
          type: String,
          unique: true,
        },
        percentCorrect: Number,
      },
    ],
  },
  { timestamps: true }
)

module.exports = model('User', userSchema)
