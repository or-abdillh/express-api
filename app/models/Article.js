'use strict'

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connection.js')

const Article = sequelize.define('Article', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
})

sequelize.drop()
Article.sync()
