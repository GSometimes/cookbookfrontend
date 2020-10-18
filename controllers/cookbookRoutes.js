const express = require('express')
const router = express.Router()

// Require the Cookbook controller.
const mongoose = require('../db/connection')
const CookbookRoute = require('../models/cookbook')
// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    const cookbook = await CookbookRoute.find({}).populate('cookbooks');
    res.json({status: 200, data: cookbook})
})
// Write the route to get cookbook by title

// Write the route to get cookbook by year published

// Write the route to create a cookbook

// Write the route to update a cookbook

// Write the route to delete the cookbook by title


module.exports = router;