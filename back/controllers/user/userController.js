const databaseService = require('../../services/userService')
const fs = require('fs')
const getUser = (req, res) => {
  databaseService.get_user((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

const getExistUser = (req, res) => {
  const user = req.body
  // console.log(user)
  databaseService.get_exist_user(user, (error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

const getRoles = (req, res) => {
  databaseService.get_roles((error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}
const saveImage = async (req, res) => {
  // try {
  //   console.log(req)
  //   if (!req.file) {
  //     return res.status(400).json({ message: 'No se ha subido ninguna imagen' })
  //   }
  //   // Puedes acceder a la información de la imagen a través de req.file
  //   const image = req.file
  //   // Por ejemplo, puedes guardar la imagen en una carpeta pública
  //   const imagePath = 'public/uploads/' + image.originalname
  //   fs.writeFileSync(imagePath, image.buffer)
  //   return res.status(200).json({ message: 'Imagen subida exitosamente' })
  // } catch (error) {
  //   console.error('Error al subir la imagen', error)
  //   return res.status(500).json({ message: 'Error al subir la imagen' })
  // }
}

const getUserById = (req, res) => {
  const user = req.body

  databaseService.get_user_by_id(user, (error, result) => {
    if (error) {
      res.json({ err: true })
    } else {
      res.json(result)
    }
  })
}

module.exports = { getUser, getExistUser, getRoles, saveImage, getUserById }
