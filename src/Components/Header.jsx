import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>

      <div className='search'>

      <input className='searchinput' type="text" />
      <img src="images/search.png" alt="" />

      </div>

    </header>
  )
}

export default Header
