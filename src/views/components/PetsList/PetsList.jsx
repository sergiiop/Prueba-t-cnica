import { Link } from 'react-router-dom'

const PetsList = ({ pets, handleDelete }) => {
  return (
    <div>
      <section>
        <Link to='/create-pet'>
          Create Pet
        </Link>
      </section>
      {pets.map((pet) => {
        return (
          <div key={pet._id}>
            <h1>{pet.name}</h1>
            <span>{pet.age}</span>
            <span>{pet.species}</span>
            <button onClick={() => handleDelete(pet._id)}>Delete</button>
            <Link to={`edit-pet/${pet._id}`}>Edit</Link>
          </div>
        )
      }
      )}
    </div>
  )
}

export default PetsList
