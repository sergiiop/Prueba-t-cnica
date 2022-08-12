import './App.css'
import { useEffect, useState } from 'react'
import { deleteAPet, getAllPets } from './services/pets'
import PetsForm from './views/components/PetsForm'
import PetsList from './views/components/PetsList/PetsList'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

const App = () => {
  const [pets, setPets] = useState([])

  // const myPet = {
  //   name: 'Leo',
  //   age: 1,
  //   species: 'cat'
  // }

  const fetchPets = async () => {
    // try {
    //   const loadPets = await getAllPets()
    //   setPets(loadPets)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  // useEffect(() => {
  //   fetchPets()
  // }, [])

  const handleDelete = async (id) => {
    // await deleteAPet(id)
    // fetchPets()
  }

  console.log(pets)
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<PetsList handleDelete={handleDelete} pets={pets} />} />
        <Route path='/create-pet' element={<PetsForm handleFetch={fetchPets} />} />
        <Route path='/edit-pet/:id' element={<PetsForm pets={pets} handleFetch={fetchPets} />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
