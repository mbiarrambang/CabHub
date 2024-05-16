// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



function Login() {
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
    };
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' >
                <h2>Log in</h2>
                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='******'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' onSubmit={handleSubmit}>Log in</button>
                <Link to ="/forgotPassword">forgotPassword</Link>
                <p>Do not Have Account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    )
}

export default Login
