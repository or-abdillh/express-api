'use strict'

const User = require('../models/User.js')
const query = require('../../helpers/query.js')

const UserController = {

    async createUser(form) {
        //parsing form
        const { username, fullname, address } = form
        
        //Instance new User
        const user = new User({
            username,
            fullname,
            address
        })
            
        //Create new user
        try {
            await user.save()
            console.log('new user success to create')
        } catch(err) {
            console.log('Something error: \n', err.name)
        }
    }
}

UserController.createUser({
    fullname: 'Atiya',
    username: 'atiya404',
    address: 'handil pandan'
})

module.exports = UserController
