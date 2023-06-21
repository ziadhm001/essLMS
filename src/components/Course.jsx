import { useEffect, useState } from 'react'
import Nav from './Nav';
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import CourseApi from '../api/course';
const Course = (props) => {
    const location = useLocation();
    const id = location.pathname.split('course/')[1]
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [course, setCourse] = useState()
    const [active, setActive] = useState('general')

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user)
            setIsLoggedIn(true)
    },[])

    useEffect(() => {
            CourseApi.GetDetails(id).then((response) =>{
            setCourse(response.data.course)
        })

    },[])
    return (
        <div>
            <Nav isLoggedIn={isLoggedIn}/>
            <div className='w-full p-12 bg-blue-950 space-y-2 text-center'>
                <p className='text-4xl text-white font-bold'></p>
            </div>
            <div className='p-16 py-8'>           
                <div className='flex-row flex p-8 bg-white border shadow-xl justify-center space-x-8'>
                    {
                    course &&
                    <img src={`${course.name.toLowerCase().includes("mongo") ? '/MongoDB.png' : course.name.toLowerCase().includes("three") ? '/Three js.jpg' : '/cpp.png' }`} className='flex w-1/4 m-auto border rounded-lg shadow-xl p-8'/>
                    }

                    <div className='w-full bg-white shadow-lg title-font mb-2 flex flex-row space-x-4'>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between'>
                                <p className={`p-6 pb-0 flex cursor-pointer ${active === 'general' ? "hr" : ""}`} onClick={() => setActive('general')}>General</p>
                                <p className={`p-6 pb-0 flex cursor-pointer ${active === 'assignment' ? "hr" : ""}`} onClick={() => setActive('assignment')}>Assignment</p>
                                <p className={`p-6 pb-0 flex cursor-pointer ${active === 'session' ? "hr" : ""}`} onClick={() => setActive('session')}>Session</p>
                            </div>
                            <div>
                                {
                                    active === 'general' 
                                    ?
                                    <div>Chat is gonna be implemented here by 2024</div>
                                    :
                                    active === 'assignement' 
                                    ?
                                    <div className='top-1/2 -translate-y-1/2'>No assignments for this course, comeback by 2025</div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Course

