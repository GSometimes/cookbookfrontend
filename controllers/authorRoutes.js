const express = require('express')
const router = express.Router()

const mongoose = require('../db/connection')
const Author = require('../models/Author')

// Write the route to list all authors


// Write the route to get authors by firstname

// Write the route to create an author:

// Write the route to update an author

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)


module.exports = router

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    const cookbooks = await CookbookRoute.find({})
    res.json({status: 200, data: cookbooks})
})
// Write the route to get cookbook by title
router.get('/:title', async (req, res) => {
    const cookbooks = await CookbookRoute.find(req.params.title)
    res.json({status: 200, data: cookbooks})
})

// Write the route to get cookbook by year published
router.get('/:year', async (req, res) => {
    const cookbooks = await CookbookRoute.find(req.params.year)
    res.json({status: 200, data: cookbooks})
})
// Write the route to create a cookbook
router.post('/', async (req, res) => {
    const cookbooks = await CookbookRoute.create(req.body)
    res.json({status: 200, data: cookbooks})
})

// Write the route to update a cookbook
router.put('/:id', async (req, res) => {
    const cookbooks = await CookbookRoute.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json({status: 200, msg: 'updated', data: cookbooks})
})
// Write the route to delete the cookbook by title
router.delete('/:title', async (req, res) => {
    const cookbooks = await CookbookRoute.deleteOne(req.params.title)
    res.json({status: 200, msg: 'deleted', data: cookbooks})
})