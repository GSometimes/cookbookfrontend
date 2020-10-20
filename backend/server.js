require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const { PORT = 3000, NODE_ENV = "development" } = process.env;

const cors = require("cors");
const corsOptions = require("./configs/cors.js");


// Add the middleware code needed to accept incoming data and add it to req.body
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());


app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'default'
    })
})

const cookbookRouter = require('./controllers/cookbookRoutes')
app.use('/api/cookbooks/', cookbookRouter)

const authorRouter = require('./controllers/authorRoutes')
app.use('/api/authors/', authorRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})
