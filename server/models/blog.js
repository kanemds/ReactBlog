const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

module.exports = mongoose.model('Blog', BlogSchema)