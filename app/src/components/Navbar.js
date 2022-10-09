import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='primary-nav'>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/about'>
          About
        </NavLink>
        <NavLink to='/products'>
          Products
        </NavLink>

        <NavLink to='/account'>
          Account
        </NavLink>
    </nav>
  )
}

export default Navbar