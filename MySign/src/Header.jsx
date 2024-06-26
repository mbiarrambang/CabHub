import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
from 'react-icons/bs'
import './App.css'
//
function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      <div className='header-left'>
        <div className='searchbar'>
        <BsSearch className='icon serach' />
        <input type='search'className='searchinput ' placeholder='search...'/>
        </div>

      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}

export default Header