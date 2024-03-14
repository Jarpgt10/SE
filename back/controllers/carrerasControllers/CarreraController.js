const databaseService = require('../../services/carreraService')

const getCarrera = (req, res) => {
  databaseService.get_carreras((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      result = result.map((carrera) => ({
        ...carrera,
        estado: carrera.estado.readUInt8(0),
      }))

      res.json(result)
    }
  })
}

module.exports = { getCarrera }
