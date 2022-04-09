'use strict'

require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

const connect = async () => {
    try {
        await sequelize.authenticate()
        console.log('MYSQL success to connected')
    } catch(err) {
        console.log('Failed to connect MYSQL : \n', err)
    }
}

connect()

module.exports = sequelize
