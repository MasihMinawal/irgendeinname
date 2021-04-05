import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiFillPlusSquare } from 'react-icons/ai'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiFillCalendar } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'

export default function Navigation() {
  const [activeIcon, setActiveIcon] = useState(1)

  function handleClick(prop) {
    setActiveIcon(true)
  }

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <Nav>
        <NavButton
          as={NavLink}
          exact
          to="/"
          style={{ color: '#000' }}
          activeStyle={{}}
          onClick={() => setActiveIcon(1)}
        >
          {activeIcon === 1 ? <AiFillHome /> : <AiOutlineHome />}
          Home
        </NavButton>
        <NavButton
          as={NavLink}
          to="/products"
          style={{ color: '#000' }}
          activeStyle={{}}
          onClick={() => setActiveIcon(2)}
        >
          {activeIcon === 2 ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
          Watch
        </NavButton>
        <NavButton
          as={NavLink}
          to="/bookings"
          style={{ color: '#000' }}
          activeStyle={{}}
          onClick={() => setActiveIcon(3)}
        >
          {activeIcon === 3 ? <AiFillCalendar /> : <AiOutlineCalendar />}
          Events
        </NavButton>
        <NavButton
          as={NavLink}
          to="/create"
          style={{ color: '#000' }}
          activeStyle={{}}
          onClick={() => setActiveIcon(4)}
        >
          {activeIcon === 4 ? <BsFillPersonFill /> : <BsPerson />}
          Profile
        </NavButton>
      </Nav>
    </IconContext.Provider>
  )
}

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5px 0;
  background: #eee;
  box-shadow: 0 2px 5px;
`

const NavButton = styled.button`
  display: grid;
  font-size: 10px;
  gap: 3px;
  justify-items: center;
  text-decoration: none;
`
