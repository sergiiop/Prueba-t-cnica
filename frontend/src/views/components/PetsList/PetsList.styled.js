import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
`

export const ButtonLink = styled(Link)`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all .3s;
`

export const PetsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px;
  margin-top: 2rem;
  gap: 1.5rem;
`

export const PetContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 0.5rem;
  background: #ffff;
  box-shadow: 0 1px 25px rgba(0,0,0,0.2);
  padding: 12px 10px;
  border-radius: 5px;
  color: black;
`

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  & > h1 {
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 4px;
  }

  & > span {
    color: #B6B9C5
  }
`

export const ImageContainer = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const DeleteButton = styled.button`
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
  background: #e62222;
  cursor: pointer;
`

export const EditButton = styled(Link)`
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
  background: #275efe;
  cursor: pointer;
  width: 50px;
  color: white;
`
