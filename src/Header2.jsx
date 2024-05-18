// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsJustify, BsArrowDown } from 'react-icons/bs'
import './App.css'
 


function Header() {
  return (
    <header className='header' >
      
      <div className='header-right'>
        <h1>Cab<span>Hub</span></h1>
      </div>
      <nav className='navbar'>
        <a href="#">home</a>
        <a href="#">about</a>
        <a to="#">service <BsArrowDown /></a>
        <a to="#">blog</a>
        <a to="#">contact</a>
        
      </nav>
      <div className='menu-icon'>
      {/*<span className='icon close_icon'>X</span>*/}
      <BsJustify className='icon' id='menu-bar-card'/>
      </div>
    </header>
  )
}

export default Header
