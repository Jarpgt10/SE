//server.js
const express = require('express')
const apiRoutes = require('./routes/api')
const databaseService = require('./services/databaseService')
const cors = require('cors')
const app = express()

// Conexión a la base de datos
databaseService.connectToDatabase()

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json())

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// Rutas de la API
app.use('/api', apiRoutes)

const port = 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
