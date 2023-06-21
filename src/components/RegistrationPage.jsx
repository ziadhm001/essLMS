import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [error, setError] = useState('') 

    const signUP  = () => {
        fetch(config.BASE_URL + '/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: username,
                email,
                password
            })
        }).then((res) =>  res.json()).then((response) => {
            if(response.error){
                setError(response.error)
            } else {
                localStorage.setItem('token', response.token)
                localStorage.setItem('user', response.user)
                navigate("/home")
            }
        })
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        setError('');
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\=-]).{8,}$/
        const usernameRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;\"'<>,.?/\\-])(?=.{8,})/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (password !== comfirmPassword){
            setError(`password & comfirm password doesn't match`)
        } else if(!passwordRegex.test(password)) {
            setError(`Password must contain at least 8 characters that contain at least one uppercase letter, one lowercase letter, and one symbol.`)
        } else if(!usernameRegex.test(username) ) {
            setError(`username must be at least 8 character one of them must be a symbol`)
        } else if (!emailRegex.test(email)) {
            setError(`email form didn't correct`)
        } else {
            navigate("/home")
            setUsername('')
            setPassword('')
            setComfirmPassword('')
            signUP()
        }
    }
    return (
        <div>
            <form onSubmit={signUpHandler}>
                <input type="text" placeholder="Enter Your username" value={username} onChange={(e) => setUsername(e.target.value.toLowerCase())}/>
                <input type="text" placeholder="Enter Your email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())}/>
                <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Comfirm Your Password" value={comfirmPassword} onChange={(e) => setComfirmPassword(e.target.value)}/>
                <button>Submit</button>                
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
export default RegistrationPage