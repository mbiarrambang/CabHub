import React from 'react'
import {
   BsCart3, BsGrid1X2Fill, BsFillArchiveFill,
   BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
   from 'react-icons/bs'
import './App.css'
import { Link/*, useNavigate */ } from 'react-router-dom'


function Sidebar({ openSidebarToggle, OpenSidebar }) {
   return (
      <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
         <div className='side-title'>
            <div className='sidebar-brand'>
               <BsCart3 className='icon_header' /> SHOP
               <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

         </div>

         <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
               <Link to="/home">
                  <BsGrid1X2Fill className='icon' /> Dashboard
               </Link>


            </li>
            <li className='sidebar-list-item'>
               <details>
                  <summary>
                        <BsFillArchiveFill className='icon' /> Vehicles
                  </summary>
                  <Link to="/addvehicle">
                     <BsFillArchiveFill className='icon' /> Vehicles List
                  </Link><br />
                  <Link to="/addvehicle">
                     <BsFillArchiveFill className='icon' /> Add Vehicles
                  </Link><br />
                  <Link to="/addvehicle">
                     <BsFillArchiveFill className='icon' />  Vehicles Group
                  </Link>
               </details>
            </li>
            <li className='sidebar-list-item'>
            <details>
                  <summary>
                  <BsFillArchiveFill className='icon' /> Drivers
                  </summary>
                  <Link to="/adddriver">
                  <BsFillArchiveFill className='icon' /> Drivers List
               </Link><br/>
               <Link to="/adddriver">
                  <BsFillArchiveFill className='icon' /> Add Drivers
               </Link>
               </details>
            </li>
            
            <li className='sidebar-list-item'>
               <details>
                  <summary>
                        <BsPeopleFill className='icon' /> Customers
                  </summary>
                  <Link to="/addcustomer">
                     <BsPeopleFill className='icon' /> Customers Managment
                  </Link><br />
                  <Link to="/addcustomer">
                     <BsPeopleFill className='icon' /> Add Customers
                  </Link>
               </details>
            </li>

            <li className='sidebar-list-item'>
               <details>
                  <summary>
                     
                        <BsFillGrid3X3GapFill className='icon' /> Booking
                     
                  </summary>
                  <Link to="/home">
                     <BsFillGrid3X3GapFill className='icon' /> Booking List
                  </Link><br />
                  <Link to="/home">
                     <BsFillGrid3X3GapFill className='icon' /> Add Booking
                  </Link>
               </details>
            </li>

            <li className='sidebar-list-item'>
               <a href=''>
                  <BsFillArchiveFill className='icon' /> Income & Expenses
               </a>
            </li>
            <li className='sidebar-list-item'>
               <details>
                  <summary>
                  <BsFillArchiveFill className='icon' /> Tracking
                  </summary>
                  <Link to="/track">
                  <BsFillArchiveFill className='icon' /> History Tracking
               </Link><br />
               <Link to="/track">
                  <BsFillArchiveFill className='icon' /> Live Tracking
               </Link>
               </details>
            </li>
            <li className='sidebar-list-item'>
               <a href=''>
                  <BsListCheck className='icon' /> Inventory
               </a>
            </li>
            <li className='sidebar-list-item'>
               <a href=''>
                  <BsMenuButtonWideFill className='icon' /> Reports
               </a>
            </li>
            <li className='sidebar-list-item'>
               <a href=''>
                  <BsFillGearFill className='icon' /> Setttings
               </a>
            </li>
            {/*<li className='sidebar-list-item'>
               <a href=''>
                  <BsFillArchiveFill className='icon' /> Admin Users
               </a>
            </li>*/}
         </ul>
      </aside>
   )
}

export default Sidebar
