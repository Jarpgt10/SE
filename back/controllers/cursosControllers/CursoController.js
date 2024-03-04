const databaseService = require('../../services/cursosService')

const getCursos = (req, res) => {
  databaseService.get_cursos((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      // Convertir los buffers a enteros
      result = result.map((curso) => ({
        ...curso,
        estado_curso: curso.estado_curso.readUInt8(0), // Lee el primer byte como entero
        estado_carrera_universitaria: curso.estado_carrera_universitaria.readUInt8(
          0,
        ), // Lee el primer byte como entero
      }))

      res.json(result)
    }
  })
}

module.exports = { getCursos }
