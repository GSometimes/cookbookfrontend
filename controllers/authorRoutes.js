const express = require('express')
const router = express.Router()

const mongoose = require('../db/connection')
const AuthorRoute = require('../models/Author')
const seedData = require('../db/seed')



// Write the route to list all authors
router.get('/', async (req, res) => {
    const authors = await AuthorRoute.find({})
    res.json({status: 200, data: authors})
})

// Write the route to get authors by firstname
router.get('/:name', async (req, res) => {
    const authors = await AuthorRoute.find(req.params.name)
    res.json({status: 200, data: authors})
})
// Write the route to create an author:
router.post('/', async (req, res) => {
    const authors = await AuthorRoute.create(req.body)
    res.json({status: 200, data: authors})
})
// Write the route to update an author
router.put('/:name', async (req, res) => {
    const authors = await AuthorRoute.findOneAndUpdate(req.params.name, req.body, {new:true})
    res.json({status: 200, msg: 'updated', data: authors})
})
// Update the cookbook using Postman.


// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)

module.exports = router
