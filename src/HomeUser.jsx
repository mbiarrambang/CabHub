
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css'
import  Navbar  from "./Navbar";
import  "./App2.css";
import Header from './Header2'
import { useState } from 'react'
//import './fontawesome-free-6.5.2-web/css/all.min.css'
//import { Link } from 'react-router-dom'
//import { color } from '@chakra-ui/react'
// import {BsCart3} from 'react-icons/bs'

function HomeUser() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const Opensidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    
    return (
      <>
        <div className='laoder-container'>
          <div className='loader'></div>
        </div>
        <Header OpenSidebar={Opensidebar}/>
        <Navbar openSidebarToggle={openSidebarToggle} OpenSidebar={Opensidebar} />
        
    </>
    )
}
export default HomeUser
