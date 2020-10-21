const employee = require('./employee')
const login = require('./login')
const manager = require('./manager')

module.exports = {
  '/': login,
  '/employee': employee,
  '/manager': manager,
}
