import React from 'react'
import Sidebar from '../Sidebar'

function AddDrivers() {
  return (
    <div className='grid-container'>
    <Sidebar  />
    <header className="header">
           <div id="hub">Add driver</div>
              <nav className="navbar">
                <p><span>customer</span> / add driver</p>
               </nav>
        </header>
     <div className="add-customer">
        <form>
          <div>
          <label>Driver's name</label>
            <input type="text" placeholder="customer name"/>
            <label>mobile</label>
            <input type="text" placeholder="customer name"/>
            <label>Age</label>
            <input type="text" placeholder="customer name"/>
            <label>license no</label>
            <input type="text" placeholder="customer name"/>
            <label>license epirary date</label>
            <input type="text" placeholder="customer name"/>
            <label>email</label>
            <input type="text" placeholder="customer name"/>
          </div>
            <label id="lable">addres</label>
            <textarea rows="4" cols="50"placeholder="addres"></textarea>
            <hr/>
            <button>+ add driver</button>
        </form>
      
     </div>
    </div>
  )
}

export default AddDrivers
