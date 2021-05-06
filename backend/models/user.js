const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
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

    salt: {
      type: String,
      required: true,
    },

    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  { timestamps: true }
)

module.exports = model('User', userSchema)
