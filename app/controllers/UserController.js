'use strict'

const User = require('../models/User.js')

// Instance
const user = User.build({
    username: 'hans2340',
    fullname: 'Oka R. Abdillah',
    address: 'Handil Bakti'
})

user.save()
