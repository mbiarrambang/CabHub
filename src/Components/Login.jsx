// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



function Login() {
    /*
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        const adminPassword = "peter"
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/login', {  
            email, 
            password 
        }).then(response =>{
            if(response.data.status == adminPassword) {
                navigate('/home')
            }
            if(response.data.status) {
                navigate('/')
            }
        }).catch(err => {
            console.log(err)
        })
    };*/
    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 show-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4x1 text-white font-bold text-center mb-6'>Login</h1>
                <form action="">
                    <div className='relative my-4'>
                        <input type="email" />
                        <label htmlFor="email" className='block w-72 py-2.3 '>Your email</label>
                    </div>
                    <div>
                        <input type="email" />
                        <label htmlFor="password">Your email</label>
                    </div>
                    <div className='relative my-4'>
                        <div>
                            <input type="checkbox" name='' id='' />
                            <label htmlFor="Remember me"></label>
                        </div>
                        <span>Forgot Password?</span>
                    </div>
                    <button type='submit'>Login</button>
                    <div>
                        <span>New here? <Link to='Signup'>Create an accont</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
