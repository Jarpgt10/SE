import { request } from '../utilities/request'
const path = 'http://localhost:3000/api/'

export const httpGetCursos = async () => {
  const result = await request(`${path}cursos`)
  return result
}
