import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserApi from '../api/user';

const LoginPage = () => {
    const [error, setError] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const signInHandler = (e) => {
        e.preventDefault()
        setError('')
        UserApi.Login({email, password}).then((res) => res.json() ).then((response) => {
            if(response.error){
                setError(response.error)
            } else {
                localStorage.setItem('token', response.token)
                localStorage.setItem('user', response.user)
                navigate("/home")
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            <form onSubmit={signInHandler}>
                <input type="text" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())}/>
                <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
                {error && <p>{error}</p>}
            </form>
         </div>
    )
}

export default LoginPage