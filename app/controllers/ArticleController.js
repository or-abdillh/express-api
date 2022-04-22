'use strict'

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/connection.js')
const response = require('../../helpers/response.js')
const article = require('../models/article.js')

const Article = article(sequelize, DataTypes)

const ArticleController = {

    async index (req, res) {
        try {
            const articles = await Article.findAll()
            response.success(articles, res)
        } catch(err) { response.internalServerError(err, res) }
    }
}

module.exports = ArticleController
