import axios from 'axios'

export const request = async (path, options = {}) => {
  try {
    if (Object.keys(options).length === 0) {
      const response = await axios.get(path)
      return response.data
    } else {
      const { method = 'GET', body } = options

      if (method.toUpperCase() === 'POST') {
        // Si el método es POST, hacer una petición POST con el cuerpo proporcionado
        if (body) {
          const response = await axios.post(path, body)
          return response.data
        } else {
          throw new Error(
            'Se debe proporcionar un cuerpo (body) para las peticiones POST.',
          )
        }
      } else {
        throw new Error(`Método HTTP no compatible: ${method}`)
      }
    }
  } catch (error) {
    // Manejar errores aquí
    console.error('Error en la petición:', error.message)
    throw error
  }
}
