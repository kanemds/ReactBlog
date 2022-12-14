const express = require('express')
const blog = require('../models/blog')
const router = express.Router()
const User = require('../models/user')

// making jwt
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxAge
  })
}



async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'No match user found' })
    }
  } catch (error) {
    return res.status(500).json(error.message)
  }
  res.user = user
  next()
}

router.get('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.redirect('/')
})


router.get('/', async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get('/:id', getUser, (req, res) => {
  res.send(res.user)
})

router.post('/login', async (req, res) => {
  const userName = req.body.userName
  const pwd = req.body.password
  let loginUser = await User.findOne({ userName })
  if (!loginUser) {
    return res.sendStatus(401) // unauthorized
  }
  const user = await bcrypt.compare(pwd, loginUser.password)

  if (user) {
    // JWTs
    const token = createToken(user._id)
    console.log(token)
    console.log(user)
    res.cookie('jwt', token)
    res.status(200).json({ user: user._id })
  } else {
    res.sendStatus(401)
  }
})


router.post('/', async (req, res, next) => {

  const hashedPwd = await bcrypt.hash(req.body.password, 10)

  const user = new User({
    userName: req.body.userName,
    password: hashedPwd,
    // password: req.body.password,
    email: req.body.email
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    const err = new Error("Internal server error.");
    err.status = 500;
    next(err);
  }
})



router.post('/:id', (req, res) => {
  const newDoc = req.body;
  for (let prop in newDoc) {
    if (!newDoc[prop]) {
      delete newDoc[prop];
      //it will remove fields who are undefined or null
    }
  }

  User.findOneAndUpdate(
    {
      _id: req.params.id,
    },

    newDoc,
    {
      // return doc after update is applied
      new: true,
      upsert: true,
    }
  )
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.status(400).json(error.message));
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'No match user found' })
    } else {
      res.json({ message: ' Successfully deleted' })
    }
  } catch (error) {
    return res.status(500).json(error.message)
  }
})




module.exports = router;