
import React /*{ useState } */from 'react'
import '../App.css'
import './w3.css'
//import Axios from 'axios'
import { Link/*, useNavigate */} from 'react-router-dom'



function Signup() {
    /*const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password
        }).then(response => {
            if (response.data.status) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    };*/
    return (
        <div className='sign-up-container'>
            <form className='sign-up-form w3-green w3-round w3-padding-small' method='post' action='/signup' /*onSubmit={handleSubmit}*/>
                <h2>Sign Up</h2>
                <label htmlFor='Username'>Username:</label>
                <input type='text' placeholder='Username'className='signup-input'
                    /*onChange={(e) => setUsername(e.target.value)} *//>

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'className='signup-input'
                    /*onChange={(e) => setEmail(e.target.value)} *//>

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='******'className='signup-input'
                    /*onChange={(e) => setPassword(e.target.value)} *//>

                <button /*onClick={handleSubmit}*/ type="submit">Sign up</button>
                <p>Have Account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup
