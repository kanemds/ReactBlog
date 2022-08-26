const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
  try {
    const blog = await Blog.find()
    res.json(blog)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
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


router.patch('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;