'use strict'

const { DataTypes, Model } = require('sequelize')
const sequelize = require('../../config/connection.js')
const article = require('./article.js')
const Article = article(sequelize, DataTypes)

class User extends Model {  }

User.init({
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true
    },
    fullname: {
        type: DataTypes.STRING(55),
        allowNull: true,
        defaultValue: 'Fulan Bin Fulan'
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'st. freedom of jhon'
    }
}, {
    sequelize,
    modelName: 'User',
    createdAt: true,
    updatedAt: true
})

User.hasMany(Article, { foreignKey: 'username' })

module.exports = User
