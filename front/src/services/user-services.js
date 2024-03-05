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
