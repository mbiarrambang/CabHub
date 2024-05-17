import { BrowserRouter, Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signlog from './Components/Signlog'
import ForgotPassword from './Components/ForgotPassword'
import CustomerInfo from './Components/CustomerInfo.jsx'
import CreateUser from './Components/CreateUser.jsx'
import UpdateUser from './Components/UpdateUser.jsx'
import HomeUser from './HomeUser.jsx'
import Addcustomer from './Sidelinks/Addcustomer.jsx'
import AddDrivers from './Sidelinks/AddDrivers.jsx'
import Addvehicles from './Sidelinks/Addvehicles.jsx'
import Tracking from './Sidelinks/Tracking.jsx'
/*</React.StrictMode>,<React.StrictMode>
    <Routes>
    </Routes>
    </BrowserRouter>*/

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeUser />}></Route>
            <Route path="/signlog" element={<Signlog />}></Route>
            <Route path="/home" element={<App />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/customerinfo" element={<CustomerInfo />}></Route>
            <Route path="/creat" element={<CreateUser />}></Route>
            <Route path="/update" element={<UpdateUser />}></Route>
            <Route path="/addcustomer" element={<Addcustomer />}></Route>
            <Route path="/adddriver" element={<AddDrivers />}></Route>
            <Route path="/track" element={<Tracking />}></Route>
            <Route path="/addvehicle" element={<Addvehicles />}></Route>
        </Routes>
    </BrowserRouter>




)
