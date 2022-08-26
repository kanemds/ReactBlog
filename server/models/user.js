const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)

