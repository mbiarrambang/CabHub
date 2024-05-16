import React from 'react'
import Sidebar from '../Sidebar'
import '../App.css'
import App from '../google-maps/src/App.jsx'

function Tracking() {
  return (
    <div className='grid-container'>
      <Sidebar />
      <App />
    </div>
  )
}

export default Tracking
