module.exports = function Employee({
  firstName = '',
  lastName = '',
  email = '',
  password = '',
}) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email
  this.password = password
}
