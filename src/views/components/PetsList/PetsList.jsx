import Loader from './Loader'
import { ButtonLink, ButtonsContainer, DeleteButton, DescriptionContainer, EditButton, Header, ImageContainer, PetContainer, PetsContainer } from './PetsList.styled'

const PetsList = ({ pets, handleDelete, fetching }) => {
  return (
    <>
      <Header>
        <ButtonLink to='/create-pet'>
          Create Pet
        </ButtonLink>
      </Header>
      <PetsContainer>
        {fetching.loading === 'pending' && (
          <div className='loader-container'>
            <Loader />
          </div>
        )}
        {fetching.loading === 'rejected' && (
          <h1>Error</h1>
        )}
        {fetching.loading === 'success' && pets.map((pet) => {
          return (
            <PetContainer key={pet._id}>
              <ImageContainer />
              <DescriptionContainer>
                <h1>{pet.name}</h1>
                <span>{pet.age} years</span>
                <span>{pet.species}</span>
                <ButtonsContainer>
                  <DeleteButton onClick={() => handleDelete(pet._id)}>Delete</DeleteButton>
                  <EditButton to={`edit-pet/${pet._id}`}>Edit</EditButton>
                </ButtonsContainer>
              </DescriptionContainer>
            </PetContainer>
          )
        }
        )}
      </PetsContainer>
    </>
  )
}

export default PetsList
