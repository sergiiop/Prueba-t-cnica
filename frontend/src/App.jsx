import './App.css'
import { useEffect, useState } from 'react'
import { deleteAPet, getAllPets } from './services/pets'
import PetsForm from './views/components/PetsForm'
import PetsList from './views/components/PetsList'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

const App = () => {
  const [pets, setPets] = useState([])
  const [fetching, setFetching] = useState({
    loading: '',
    error: null
  })

  const fetchPets = async () => {
    setFetching({
      loading: 'pending',
      error: null
    })
    try {
      const loadPets = await getAllPets()
      setPets(loadPets)
      setFetching({
        loading: 'success',
        error: null
      })
    } catch (error) {
      setFetching({
        loading: 'rejected',
        error: error.message
      })
    }
  }

  useEffect(() => {
    fetchPets()
  }, [])

  const handleDelete = async (id) => {
    await deleteAPet(id)
    fetchPets()
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<PetsList handleDelete={handleDelete} pets={pets} fetching={fetching} />} />
        <Route path='/create-pet' element={<PetsForm handleFetch={fetchPets} setFetching={setFetching} fetching={fetching} />} />
        <Route path='/edit-pet/:id' element={<PetsForm handleFetch={fetchPets} pets={pets} setFetching={setFetching} fetching={fetching} />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
