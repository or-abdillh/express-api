'use strict'

module.exports = async (action, handler, errorHandler) => {
    try {
        await action()
        handler()
    } catch(err) {
        errorHandler(err)
    }
}
