'use strict'
  
const { Sequelize } = require('sequelize')
const db = require('./database.js')

const sequelize = new Sequelize(
    db.name,
    db.userName,
    db.password,
    {
        host: db.hostName,
        dialect: db.dialect 
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
