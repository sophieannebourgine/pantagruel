const express = require('express')
// const Property = require('../models/Property')

const router = express.Router()

// Route to get all countries
router.get('/', (req, res, next) => {
  Menu.find()
    .then(menu => {
      res.json(menu)
    })
    .catch(err => next(err))
})

module.exports = router
