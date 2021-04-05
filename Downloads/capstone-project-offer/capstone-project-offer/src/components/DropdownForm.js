import { useState } from 'react'
import styled from 'styled-components/macro'

import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function DropdownForm() {
  const [dropdown, setDropdown] = useState('20')

  return (
    <Form>
      <Label>
        Wähle eine Option
        <Dropdown
          value={dropdown}
          onChange={e => {
            setDropdown(e.target.value)
          }}
        >
          <option value="10">2. Herren Mannschaft</option>
          <option value="15">A-Jugend</option>
          <option value="20">B-Jugend</option>
          <option value="25">C-Jugend</option>
          <option value="30">D-Jugend</option>
          <option value="35">E-Jugend</option>
          <option value="40">E-Jugend</option>
        </Dropdown>
        <DropdownIcon />
      </Label>
      <Link to="/products/1/book">
        <Button>Termin Buchen</Button>
      </Link>
    </Form>
  )
}

const Form = styled.form`
  display: grid;
  gap: 10px;
`

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
`

const Dropdown = styled.select`
  -webkit-appearance: none;
  background-color: #eee;
  border: 0 solid transparent;
  width: 100%;
  height: 50px;
  font-size: 14px;
  position: relative;
  outline: none;
`
const DropdownIcon = styled(IoMdArrowDropdown)`
  width: 20px;
  height: auto;
  position: absolute;
  right: 10px;
  margin-top: 15px;
`

const Button = styled.button`
  width: 80%;
  height: 50px;
  border: 0 solid transparent;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin: 0 auto;
`
