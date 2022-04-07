'use strict'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lara_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const connecting = async () => {
    try {
        await sequelize.authenticate()
        console.log('MySQL success to connected')
    } catch(err) {
        console.error('Something wrong to connect the database : \n', err)
    }
}

connecting()
module.exports = sequelize