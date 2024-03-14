import { request } from '../utilities/request'
const path = 'http://localhost:3000/api/'

export const httpGetCarreras = async () => {
  const result = await request(`${path}carrera`)
  return result
}
