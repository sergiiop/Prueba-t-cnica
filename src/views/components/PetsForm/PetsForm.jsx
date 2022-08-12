import { useEffect, useState } from 'react'
import { createAPet, updateAPet } from '../../../services/pets'
import { useNavigate, useParams } from 'react-router-dom'

const PetsForm = ({ handleFetch, pets }) => {
  const [inputName, setInputName] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputSpecies, setInputSpecies] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const agePet = parseInt(inputAge, 10)
    const thePet = {
      name: inputName,
      age: agePet,
      species: inputSpecies
    }
    if (params.id) {
      await updateAPet(params.id, thePet)
    } else {
      // await createAPet(thePet)
    }
    // handleFetch()
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
      const pet = pets.find(pet => pet._id === params.id)
      if (pet) {
        const { name, age, species } = pet
        setInputAge(age)
        setInputName(name)
        setInputSpecies(species)
      }
      setIsDisabled(true)
    }
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputName} onChange={({ target }) => setInputName(target.value)} placeholder='Name' />
      <input type='text' value={inputAge} onChange={({ target }) => setInputAge(target.value)} placeholder='Age' />
      <input type='text' value={inputSpecies} onChange={({ target }) => setInputSpecies(target.value)} placeholder='Species' disabled={isDisabled} />
      <button>Enviar</button>
    </form>
  )
}

export default PetsForm
