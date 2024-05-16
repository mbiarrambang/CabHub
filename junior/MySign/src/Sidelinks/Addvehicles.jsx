import React from 'react'
import Sidebar from '../Sidebar'

function Addvehicles() {
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
          <div>
          <label>name</label>
            <input type="text" placeholder="customer name"/>
            <label>mobile</label>
            <input type="text" placeholder="customer name"/>
            <label>email</label>
            <input type="text" placeholder="customer name"/>
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

export default Addvehicles
