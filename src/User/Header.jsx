import React from 'react'
import {  BsPersonCircle,  BsJustify }
  from 'react-icons/bs'
  import './App.css'
  //import '/src/User/fontawesome-free-6.5.2-web/css/all.min.css'


function Header() {

   /*navbar.onClick=()=>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
  }*/
  return (
    <header className='header' >
      
      <div className='header-right'>
        <h1>Cab<span>Hub</span></h1>
      </div>
      <nav className='navbar'>
        <a href="#">home</a>
        <a href="#">about</a>
        <a to="#">service</a>
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
