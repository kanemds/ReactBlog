const express = require('express')
const router = express.Router()


const blog = require('./blog')
const user = require('./user')


router.use('/users', user)
router.use('/blogs', blog)


module.exports = router