const Model = require('../models/manager')

module.exports = {
  get,
}

// basic crud ops

function get(id) {
  // this needs to be massaged result of pg.query
  return new Model({
    id: 1,
    firstName: 'Bob',
    lastName: 'Doe',
  })
}

function list() {
  // this needs to be massaged result of pg.query
  const results = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
    },
  ]
  const managers = []
  for (const result of results) {
    managers.push(new Manager({
      id,
      firstName,
      lastName,
    }))
  }
  return managers
}

function update(id, options) {
  // return all employees
}

function remove(id) {
 // delete employee by id
}

// model specific ops 

function changeShift(id) {
 // change the shift for an employee
}
