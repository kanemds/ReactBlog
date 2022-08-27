const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')


async function getBlog(req, res, next) {
  let blog
  try {
    blog = await Blog.findById(req.params.id)
    if (blog == null) {
      return res.status(404).json({ message: 'No match blog found' })
    }
  } catch (error) {
    return res.status(500).json(error.message)
  }
  res.blog = blog
  next()
}

router.get('/', async (req, res) => {
  try {
    const blog = await Blog.find()
    res.json(blog)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get('/:id', getBlog, (req, res) => {
  res.send(res.blog)
})

router.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  })
  try {
    const newBlog = await blog.save()
    res.status(201).json(newBlog)
  } catch (error) {
    res.status(400).json(error.message)
  }
})


router.post('/:id', async (req, res) => {
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
    const blog = await Blog.findByIdAndDelete(req.params.id)
    if (blog == null) {
      return res.status(404).json({ message: 'No match blog found' })
    } else {
      res.json({ message: ' Successfully deleted' })
    }
  } catch (error) {
    return res.status(500).json(error.message)
  }
})



module.exports = router;