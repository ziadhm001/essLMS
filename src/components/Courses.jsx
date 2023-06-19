import React, { useState } from 'react';
import SmallCourseCard from './SmallCourseCard'
import LargeCourseCard from './LargeCourseCard'
import Nav from './Nav';
import Footer from './Footer'
const Courses = () => {
    const courses = [1,1]
    const [page, setPage] = useState(0)
    const coursesNum = 2
    return (
        <div>
            <Nav />
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
                                courses.map((course, index) => {if(index == page) return <LargeCourseCard />})
                            }
                            <button className={`bg-white text-black rounded-r-md py-2 border border-gray-700 hover:bg-blue-100 px-3 flex h-12 self-center ${page === coursesNum -1 ? "disabled hover:bg-white cursor-default" : ""}`} onClick={() => {if (page !== coursesNum -1) setPage(prev => prev + 1) }}>
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
                    <SmallCourseCard name={"Three js - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Ziad Hazem"} src={"../../public/Three js.jpg"}/>
                    <SmallCourseCard name={"MongoDB - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Beshoy Atef"} src={"../../public/course.jpeg"}/>
                    <SmallCourseCard name={"Mongodb - A Better Course!"} description={"Best MongoDB course ever man, take it and pray for me."} creator={"Adham Ehab"} src={"../../public/MongoDB.png"}/>
                    <SmallCourseCard name={"Three js - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Ahmed Osama"} src={"../../public/Three js.jpg"}/>
                    <SmallCourseCard name={"Three js - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Zyad Abdelnasser"} src={"../../public/Three js.jpg"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export { Courses as default }