const users = require('./users');
const login = require('./login');
const manager = require('./manager');
const shifts = require('./shifts');
const events = require('./events');

module.exports = {
  '/': login,
  '/api/users': users,
  '/manager': manager,
  '/api/shifts': shifts,
  '/api/events/publish': events,
  '/api/events/add': events,
  '/api/shiftid/remove': events
};
