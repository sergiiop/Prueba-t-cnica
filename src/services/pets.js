import axios from 'axios'
import { BASE_URL } from './types'

const key = import.meta.env.VITE_CRUD_KEY
const baseUrl = `${BASE_URL}${key}/pets`

export const getAllPets = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export const createAPet = async (content) => {
  const res = await axios.post(`${baseUrl}`, content)
  return res.data
}

export const deleteAPet = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

export const updateAPet = async (id, content) => {
  const res = await axios.put(`${baseUrl}/${id}`, content)
  return res.data
}
