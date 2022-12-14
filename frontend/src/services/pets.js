import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_CRUD_URL}/pets`

export const getAllPets = async () => {
  // const res = new Promise((resolve) =>
  //   setTimeout(() => resolve([
  //     {
  //       _id: '5a033eeb364bf301523e9b92',
  //       name: 'Bebe',
  //       age: 2,
  //       species: 'cat'
  //     },
  //     {
  //       _id: '5a033eeb364bf301523e9b22',
  //       name: 'Leo',
  //       age: 1,
  //       species: 'cat'
  //     }
  //   ]))
  // )
  // return res
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
