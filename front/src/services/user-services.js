import { request } from '../utilities/request'
const path = 'http://localhost:3000/api/'

export const httpGetUser = async () => {
  const result = await request(`${path}user`)
  return result
}

export const httpExistUser = async (body) => {
  const result = await request(`${path}existuser`, {
    method: 'POST',
    body,
  })
  return result
}

export const hhtpGetRoles = async () => {
  const result = await request(`${path}roles`)
  return result
}

export const httpSaveImg = async (body) => {
  const result = await request(`${path}saveImg`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body,
  })
  return result
}

export const httpGetUserById = async (body) => {
  const result = await request(`${path}userById`, {
    method: 'POST',
    body,
  })
  return result
}

export const httpAddNewUser = async (body) => {
  const result = await request(`${path}addNewUser`, {
    method: 'POST',
    body,
  })
  return result
}

// export const httpSaveImg = async (image) => {
//   try {
//     const formData = new FormData()
//     formData.append('image', image)

//     await axios.post('/saveImg', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })

//     console.log('Imagen enviada exitosamente')
//   } catch (error) {
//     console.error('Error al enviar la imagen', error)
//   }
// }
