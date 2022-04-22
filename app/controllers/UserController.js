'use strict'

const User = require('../models/user.js')
const response = require('../../helpers/response.js')

const UserController = {

    async index(req, res) {
        try {
            const users = await User.findAll({
                attributes: {
                    exclude: [ 'updatedAt', 'createdAt' ]
                }
            })
            response.success(users, res)
        } catch(err) {
            response.internalServerError(err, res)
        }
    },

    async createUser(req, res) {
        //parsing form
        const { username, fullname, address } = req.body
        
        //Create new user
        try {
            await User.create({ username, fullname, address })
            response.success(`Success for create user : ${username}`, res)
        } catch(err) {
            response.internalServerError(err, res)
        }
    },

    async removeUser(req, res) {
        //Get unique key
        const { key } = req.body
            
        try {
            await User.destroy({
                where: {
                    username: key
                }
            })
            response.success(`Success remove ${key} from table`, res)
        } catch(err) {
            response.internalServerError(err, res)
        }
    },

    async updateUser(req, res) {
        //Parse form
        const { key, username, fullname, address } = req.body
            
        try {
            await User.update({ username, fullname, address }, {
                where: {
                    username: key
                }
            })
            response.success(`Succes to update data for ${key}`, res)
        } catch(err) {
            response.internalServerError(err, res)
        }
    }
}

module.exports = UserController
