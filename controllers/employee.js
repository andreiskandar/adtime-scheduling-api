const Model = require('../models/employee')
//const db = require('../lib/db')

module.exports = {
  get,
  list,
}

// basic crud ops

function get(id) {
  // this needs to be massaged result of pg.query
  //const employee = db.query('SELECT * FROM Employees where id=$id')
  return new Model({
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  })
}

function list() {
  // this needs to be massaged result of pg.query
  //const employee = db.query('SELECT * FROM Employees')
  const results = [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Alice',
      lastName: 'Doe',
    },
  ]
  const employees = []
  for (const result of results) {
    employees.push(new Employee({
      id,
      firstName,
      lastName,
    }))
  }
  return employees
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
