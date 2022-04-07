'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./config/connection.js')

const app = express()

app.use(cors())
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

const PORT = 8080 || process.env.PORT

app.listen(PORT, err => {
    try {
        if (!err) console.log(`Server running at PORT ${PORT}`)
        else throw err
    } catch(err) {
        console.log('Something wrong :', err)
    }
})