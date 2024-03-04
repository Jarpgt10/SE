const databaseService = require('../../services/userService')

const getUser = (req, res) => {
  databaseService.get_user((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

module.exports = { getUser }
