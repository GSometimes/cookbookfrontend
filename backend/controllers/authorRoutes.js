const express = require('express')
const router = express.Router()

const mongoose = require('../db/connection')
const AuthorRoute = require('../models/Author')


// Write the route to list all authors
router.get('/', async (req, res) => {
    const authors = await AuthorRoute.find({})
    res.json({status: 200, data: authors})
})

// Write the route to get authors by firstname
router.get('/:name', async (req, res) => {
    const authors = await AuthorRoute.find({firstName: req.params.name})
    res.json({status: 200, data: authors})
})
// Write the route to create an author:
router.post('/', async (req, res) => {
    const authors = await AuthorRoute.create(req.body)
    res.json({status: 200, data: authors})
})
// Write the route to update an author
router.put('/:name', async (req, res) => {
    const authors = await AuthorRoute.findOneAndUpdate({firstName: req.params.name}, req.body, {new:true})
    res.json({status: 200, msg: 'updated', data: authors})
})

// Delete cookbooks by author
router.delete('/:id', async (req, res) =>{
    const authors = await AuthorRoute.findByIdAndDelete(req.params.id)
        res.json({status: 200, msg: 'item deleted'})
});


module.exports = router
