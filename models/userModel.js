class User {
  constructor(id, username, password) {
    this.id = id
    this.username = username
    this.password = password
  }
}

// In-memory database
const users = []

module.exports = {
  User,
  users
}
  