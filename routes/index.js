const user = require('./users')
const login = require('./login')
const manager = require('./manager')

module.exports = {
  '/': login,
  '/user': user,
  '/manager': manager,
}
