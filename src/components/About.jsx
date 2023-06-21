import { useEffect, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer'
const About = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user)
            setIsLoggedIn(true)
    },[])
    return (
        <div>
            <Nav isLoggedIn={isLoggedIn}/>
            <div className='w-full p-12 bg-blue-950 space-y-2 text-center'>
                <p className='text-4xl text-white font-bold'>About us ..</p>
            </div>
            <div className='p-16 py-8'>           
                <div className='flex-row flex p-8 bg-white border shadow-xl justify-center space-x-8'>
                    <img src='/About.jpg' className='flex w-1/3 m-auto border rounded-lg shadow-xl'/>
                    <div className='flex flex-col self-center space-y-4 shadow p-4'>
                        <p className='flex text-2xl subtitle-font text-center'>We are a group of software geeks called BZAAZ which stands for our names, maybe also our coding style.</p>
                        <p className='flex text-lg subtitle-font text-center p-12'>Our aim is to make programmers lives easier.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About

