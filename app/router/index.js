'use strict'

const index = require('../controllers/IndexController.js')
const user = require('../controllers/UserController.js')
const article = require('../controllers/ArticleController.js')

module.exports = app => { //app === express app

    app.route('/').get( index )

    app.route('/user')
        .get( user.index ) // Get all user from record
        .post( user.createUser ) // Create new user
        .delete( user.removeUser ) // Remove user by username
        .put( user.updateUser ) // Update record by username

    app.route('/article')
        .get( article.index ) //Get all article
}
