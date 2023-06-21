import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserApi from '../api/user';
import Footer from './Footer';
import Nav from './Nav';

const LoginPage = () => {
    const [error, setError] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const signInHandler = (e) => {
        e.preventDefault()
        setError('')
        UserApi.Login({email, password}).then((response) => {
            if(response.data.error){
                setError(response.data.error)
            } else {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', response.data.user.name)
                localStorage.setItem('email', response.data.user.email)

                navigate("/")
            }
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className='flex justify-center'>
            <Nav hide/>
            <div className='space-y-8 justify-center flex flex-col shadow border bg-blue-50 p-32 absolute top-1/2 -translate-y-1/2'>
                <img src='/ess.png' className='p-4 w-32 shadow flex self-center bg-white'/>
                <form onSubmit={signInHandler} className='flex flex-col space-y-4'>
                    <input type="text" className='p-2 shadow text-sm' placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())}/>
                    <input type="password" className='p-2 shadow text-sm' placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='p-2 bg-white hover:bg-blue-200 border-blue-950 border rounded-md'>Login</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
         </div>
    )
}

export default LoginPage