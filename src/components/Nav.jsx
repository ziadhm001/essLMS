import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaList } from "react-icons/fa"

const Nav = ({isLoggedIn, hide}) => {
    const navigate = useNavigate()
    const pathName = window.location.pathname; 
    return (
      <div className="flex flex-col items-center justify-center w-full">    
            <nav className="flex w-full top-0 left-0 right-0 z-10 flex-col">
              <div className="flex red_bg justify-around py-5 backdrop-blur-md shadow-md w-full top-0 left-0 right-0 z-10">
                  <div className="flex items-center flex-row cursor-pointer" onClick={() => navigate('/')}>
                          <img className='w-16' src="/ess.png" alt="Store Logo" />
                          <div className='flex flex-col'>

                          <p className="text-xl text-slate-900 font-mono white ml-2">
                            Eliminate
                          </p>
                          <p className="text-lg text-slate-800 font-mono white ml-2">
                            Silly Switching
                          </p>
                          </div>
                  </div>
      
                  <div className="items-center hidden lg:flex">
                  <form>   
                      <div className="relative border rounded-lg shadow-xl border-blue-950">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </div>
                          <input type="search" id="default-search" className="block p-2 w-96 px-12 text-sm text-gray-900 rounded-md" placeholder="Search course, instructor, etc.." required />
                      </div>
                  </form>
                  </div>

                  <div className="flex items-center space-x-8">

                      <div className="cursor-pointer  hidden space-x-4 lg:flex">
                        <FaTwitter size={25}/>
                        <FaLinkedin size={25}/>
                        <FaInstagram size={25}/>
                        <FaYoutube size={25}/>
                        <FaFacebookSquare size={25} />
                      </div>
                      { isLoggedIn && !hide
                      ?
                      <button onClick={ () => {localStorage.removeItem('user'); localStorage.removeItem('token'); navigate('/'); navigate(0)}} className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 shadow-md shadow-blue-900 rounded w-24 h-9 transition-colors duration-300">
                          Logout
                      </button>
                      :
                      !hide &&
                      <button onClick={ () => {navigate('/login')}} className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 shadow-md shadow-blue-900 rounded w-24 h-9 transition-colors duration-300">
                          Sign in
                      </button>
                      }
                  </div>
              </div>
              <div className="flex white_bg justify-around py-4 backdrop-blur-md shadow-md w-full top-0 left-0 right-0 z-10">
                <ul className="flex text-sm flex-row font-medium text-black overflow-auto hide_scrollbar h-max space-x-8 mx-8">
                  <button onClick={() => navigate('/')} className="whitespace-nowrap flex space-x-1">Home</button>
                  {isLoggedIn && <button onClick={() => navigate('/courses')} className="whitespace-nowrap">Courses</button>}
                  <button onClick={() => navigate('/about')} className="whitespace-nowrap">About</button>
                  {isLoggedIn &&<button onClick={() => navigate('/profile')} className="whitespace-nowrap">Profile</button> }
                  <button className="self-center"><FaList /></button>
                </ul>
              </div>
            </nav>
          </div>
  
    )
  }

  export default Nav
  
