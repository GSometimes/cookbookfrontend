const express = require('express')
const router = express.Router()



// Require the Cookbook controller.
const mongoose = require('../db/connection')
const CookbookRoute = require('../models/cookbook')


// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    const cookbooks = await CookbookRoute.find({})
    res.json({status: 200, data: cookbooks})
})
// Write the route to get cookbook by title
router.get('/:title', async (req, res) => {
    const cookbooks = await CookbookRoute.find({title: req.params.title})
    res.json({status: 200, data: cookbooks})
})

// Write the route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
    const cookbooks = await CookbookRoute.find({yearPublished: req.params.year})
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


module.exports = router;