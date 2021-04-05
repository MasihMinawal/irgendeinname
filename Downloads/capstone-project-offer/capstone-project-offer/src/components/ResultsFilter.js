import styled from 'styled-components/macro'
import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'

export default function ResultsFilter({ userInput, setUserInput }) {
  return (
    <IconContext.Provider value={{ size: '20px', color: '#000' }}>
      <FilterContainer>
        <FilterByName>
          <Input
            placeholder="Suche nach Stadt"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
          <AiOutlineSearch
            style={{ marginLeft: '5px', position: 'absolute' }}
          />
        </FilterByName>
      </FilterContainer>
    </IconContext.Provider>
  )
}

const FilterContainer = styled.form``
const FilterByName = styled.label`
  padding: 10px 5px;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`
const Input = styled.input`
  background-color: #eee;
  border: none;
  width: 100%;
  padding: 10px 30px;
  font-size: 14px;
  outline: none;
`
