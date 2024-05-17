import React from 'react'
import Login from './Login'
import {Route, Routes} from 'react-router-dom'
 function Signlog() {
  return (
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ 'background-image': "url('../src/assets/214dff5f485e71edbfe335375076208d.jpg')" }}>
      <Routes>
        <Route path='login' element={<Login />} />
       </Routes>
    </div>
  )
}
export default Signlog