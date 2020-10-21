module.exports = function Employee({
  firstName = '',
  lastName = '',
}) {
  this.firstName = firstName
  this.lastName = lastName
}
