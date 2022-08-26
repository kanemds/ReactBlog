const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
  try {

  } catch (error) {

  }
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/', (req, res) => {

})


router.patch('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;