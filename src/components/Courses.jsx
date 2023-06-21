import SmallCourseCard from './SmallCourseCard'
import LargeCourseCard from './LargeCourseCard'
import Nav from './Nav';
import Footer from './Footer'
import { useEffect, useState } from 'react'
import CourseApi from '../api/course';
import { useNavigate } from 'react-router-dom';
const Courses = () => {
    const [managedCourses, setManagedCourses] = useState([])
    const [courses, setCourses] = useState([])
    const [page, setPage] = useState(0)
    const [create, setCreate] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')
    const [description, setDescription] = useState('')
    const [coursesNum, setCourseNumber] = useState()
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const user = localStorage.getItem('user')
        if(user)
            setIsLoggedIn(true)
    },[])
    useEffect(() => {
        CourseApi.GetByCategory({category: "programming"}).then((response) =>{
            setCourses(response.data.tempCourses);
        })
    },[])

    useEffect(() => {
        CourseApi.GetManaged().then((response) =>{
            console.log(response.data)
            setCourseNumber(response.data.length)
            setManagedCourses(response.data);
        })
    },[])


    const registerHandler = (e) => {
        e.preventDefault();
        CourseApi.Register({name, description, category}).then((response) => {
                if(response.data.error){
                    setError(response.data.error)
                } else {
                    console.log(response.data)
                    navigate(0)
                }
            }).catch((error) => {
                console.log(error)
            })
        }


    return (
        <div className={`${create ? 'backdrop-opacity-50 opacity-60' : ""}`}>
            <Nav isLoggedIn={isLoggedIn} />
            <div className='w-full p-5 bg-blue-950 space-y-2' />
                <div className='flex-col flex space-y-4 p-16 pt-8 m-auto self-center pb-0'>
                    <p className='text-center p-4 title-font text-3xl'>Your Courses</p>
                        <div className='flex flex-row justify-center space-x-4'>
                                <button className={`bg-white text-black rounded-l-md border border-gray-700 py-2 hover:bg-blue-100 px-3 h-12 self-center ${page === 0 ? "disabled hover:bg-gray-200 cursor-default" : ""}`} onClick={() => {if (page !== 0) setPage(prev => prev - 1) }}>
                                    <div className="flex flex-row align-middle">
                                        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </button>
                            {
                                managedCourses.map((course, index) => {if(index == page) return <LargeCourseCard id={course.id} name={course.name} description={course.description} creator={"Beshoy Atef"} src={"../../public/course.jpeg"} />})
                            }
                            <button className={`bg-white text-black rounded-r-md py-2 border border-gray-700 hover:bg-blue-100 px-3 flex h-12 self-center ${page === coursesNum -1 ? "disabled hover:bg-gray-200 cursor-default" : ""}`} onClick={() => {if (page !== coursesNum -1) setPage(prev => prev + 1) }}>
                                <div className="flex flex-row align-middle self-center">
                                    <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </button>
                    </div>
                </div>
            <div className='space-x-4 p-8 pt-0 m-auto flex justify-center flex-col'>
                <p className='text-center p-4 title-font text-3xl'>Recommended for you</p>
                <div className='flex justify-center space-x-4'>
                    {Array.isArray(courses) && courses.map((course) => <SmallCourseCard name={course.name} description={course.description} creator={"Ziad Hazem"} src={"../../public/Three js.jpg"} id={course.id}/>)}
                </div>
            </div>
            <button className={`open-button p-4 px-6 font-extrabold bottom-32 shadow-2xl text-white bg-green-500 rounded-full ${create ? "hidden" : "block"}`} onClick={() => setCreate(true)}>+</button>
            <div className={`${create ? "block" : "hidden"} space-y-4 justify-center flex flex-col shadow border bg-blue-200 p-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden chat-popup w-1/4`}>
                <button className='self-end' onClick={() => {setCreate(false)}}>X</button>
                <img src='/ess.png' className='p-4 w-24 shadow flex self-center bg-white'/>
                <p className='text-center text-red-400 overflow-hidden'></p>
                <form onSubmit={registerHandler} className='flex flex-col space-y-4'>
                    <input type="text" className='p-1 shadow text-sm' placeholder="Enter course name" value={name} onChange={(e) => setName(e.target.value.toLowerCase())}/>
                    <input type="text" className='p-1 shadow text-sm' placeholder="Enter course description" value={description} onChange={(e) => setDescription(e.target.value.toLowerCase())}/>
                    <input type="text" className='p-1 shadow text-sm' placeholder="Enter course category" value={category} onChange={(e) => setCategory(e.target.value.toLowerCase())}/>
                    <button className='p-1 bg-white hover:bg-blue-200 border-blue-950 border rounded-md'>Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Courses

