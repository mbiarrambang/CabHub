
//import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
/*import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'*/


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

 const Opensidebar = () => {
   setOpenSidebarToggle(!openSidebarToggle)
 }
  return(
    <div className='grid-container'>
      <Header OpenSidebar={Opensidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={Opensidebar} />
      <Home />
    </div>
  );

}

export default App
  /*  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
    </Routes>
    </BrowserRouter>
  */
 





