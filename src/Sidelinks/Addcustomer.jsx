// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from '../Sidebar'
//{openSidebarToggle, OpenSidebar} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}
 function Addcustomer() {
  return (
    <div className='grid-container'>
    <Sidebar  />
    <header className="header">
           <div id="hub">Add customer</div>
              <nav className="navbar">
                <p><span>customer</span> / add customer</p>
               </nav>
        </header>
     <div className="add-customer">
        <form>
          <div className='input'>
          <label>name: </label>
            <input type="text"  className='searchinput'placeholder="customer name"/>
            <label>mobile:</label>
            <input type="text" className='searchinput' placeholder="customer name"/>
            <label>email:</label>
            <input type="text" className='searchinput' placeholder="customer name"/>
          </div>
            <label id="lable">addres</label>
            <textarea rows="4" cols="50"placeholder="addres"></textarea>
            <hr/>
            <button>+ add customer</button>
        </form>
      
     </div>
    </div>
  )
}


export default Addcustomer
