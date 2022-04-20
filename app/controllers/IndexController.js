'use strict'

const response = require('../../helpers/response.js')

const IndexController = (req, res) => response.success('Server OK! no problem', res)

module.exports = IndexController
