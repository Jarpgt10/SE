import { request } from '../utilities/request'
const path = 'http://localhost:3000/api/'

export const httpGetUser = async () => {
  const result = await request(`${path}user`)
  return result
}
