import { useEffect, useState } from 'react'
import { createAPet, updateAPet } from '../../../services/pets'
import { useNavigate, useParams } from 'react-router-dom'
import { InputsContainer, InputText, Title } from './PetsForm.styled'

const PetsForm = ({ pets, setFetching, handleFetch }) => {
  const [inputName, setInputName] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputSpecies, setInputSpecies] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const agePet = parseInt(inputAge, 10)
      const thePet = {
        name: inputName,
        age: agePet,
        species: inputSpecies
      }
      if (params.id) {
        await updateAPet(params.id, thePet)
      } else {
        await createAPet(thePet)
      }
      navigate('/')
      handleFetch()
    } catch (error) {
      console.log(error.message)
    }
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
    <>
      <Title>Add a new pet!</Title>
      <form onSubmit={handleSubmit}>
        <InputsContainer>

          <InputText type='text' value={inputName} onChange={({ target }) => setInputName(target.value)} placeholder='Name' />
          <InputText type='number' value={inputAge} onChange={({ target }) => setInputAge(target.value)} placeholder='Age' />
          <InputText type='text' value={inputSpecies} onChange={({ target }) => setInputSpecies(target.value)} placeholder='Species' disabled={isDisabled} />
        </InputsContainer>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default PetsForm
