const express = require('express')
const morgan = require('morgan')
const { json, urlencoded } = require('body-parser')

// Init
const app = express()

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))

// Routes
const userRouter = require('./routes/user.route')

app.use('/', userRouter)
app.use('/users', userRouter)

module.exports = app
