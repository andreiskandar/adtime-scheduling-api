const users = require('./users')
const login = require('./login')
const manager = require('./manager')

module.exports = {
  '/': login,
  '/api/users': users,
  '/manager': manager,
}
