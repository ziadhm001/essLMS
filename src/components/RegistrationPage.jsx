import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import UserApi from '../api/user';
const RegistrationPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [error, setError] = useState('') 

    const signUpHandler = (e) => {
        e.preventDefault();
        setError('');
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\=-]).{8,}$/
        if (password !== comfirmPassword){
            setError(`password & comfirm password doesn't match`)
        } else if(!passwordRegex.test(password)) {
            setError(`Password must have <= 8 characters.`)
        } else {
            UserApi.Register({email, password, name}).then((response) => {
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
    }
    return (
        <div className='flex justify-center'>
        <Nav hide/>
        <div className='space-y-8 justify-center flex flex-col shadow border bg-blue-50 p-32 absolute top-1/2 -translate-y-1/2 overflow-hidden'>
            <img src='/ess.png' className='p-4 w-32 shadow flex self-center bg-white'/>
            <p className='text-center text-red-400 overflow-hidden'>{error}</p>
            <form onSubmit={signUpHandler} className='flex flex-col space-y-4'>
                <input type="text" className='p-2 shadow text-sm' placeholder="Enter Your name" value={name} onChange={(e) => setName(e.target.value.toLowerCase())}/>
                <input type="text" className='p-2 shadow text-sm' placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())}/>
                <input type="password" className='p-2 shadow text-sm' placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" className='p-2 shadow text-sm' placeholder="Comfirm Your Password" value={comfirmPassword} onChange={(e) => setComfirmPassword(e.target.value)}/>
                <button className='p-2 bg-white hover:bg-blue-200 border-blue-950 border rounded-md'>Submit</button>
            </form>
        </div>
     </div>
    )
}
export default RegistrationPage