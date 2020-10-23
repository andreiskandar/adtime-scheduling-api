const users = require('./users')
const login = require('./login')
const manager = require('./manager')
const shifts = require('./shifts')

module.exports = {
  '/': login,
  '/users': users,
  '/manager': manager,
  '/api/shifts': shifts,
}
