import { useState } from 'react';
import SmallCourseCard from './SmallCourseCard'
import LargeCourseCard from './LargeCourseCard'

import Nav from './Nav';
import Footer from './Footer'
const Profile = () => {
    const [active, setActive] = useState('browse')
    const name = "Ziad Hazem Mahmoud Eldesoky"
    const organization = "Faculty of Engineering - Helwan University"
    return (
        <div>
            <Nav />
            <div className='w-full p-12 bg-blue-950 space-y-2'>
                <p className='text-4xl text-white font-bold'>{name}</p>
                <p className='text-xl text-white'>{organization}</p>
            </div>
            <div className='w-full bg-white shadow-lg title-font mb-2 flex flex-row space-x-4'>
                <p className={`p-6 pb-0 flex cursor-pointer ${active === 'browse' ? "hr" : ""}`} onClick={() => setActive('browse')}>Browse Catalog</p>
                <p className={`p-6 pb-0 flex cursor-pointer ${active === 'settings' ? "hr" : ""}`} onClick={() => setActive('settings')}>Profile Settings</p>
            </div>
            <div className='p-16 py-8'>           
                <div className='flex-row flex p-8 bg-white border shadow-xl space-x-4'>
                    <svg className="css-umxfhe flex" height="88" viewBox="0 0 98 114" fill="none" role="presentation"><circle cx="38.5" cy="50.5" r="38.5" fill="#DCEEF6"></circle><path d="M38.4989 41L33.5039 22.3724" stroke="black" stroke-width="2"></path><path d="M42.6996 27.7152L33.5046 22.3724L28.2246 31.6976" stroke="black" stroke-width="2"></path><ellipse cx="61.4988" cy="24.6303" rx="3.28788" ry="3.31211" stroke="black" stroke-width="2"></ellipse><path d="M66.1053 41V36.3447C71.6826 34.1177 74.9027 28.2131 73.7774 22.2768C72.6521 16.3404 67.4987 12.0466 61.4993 12.0466C55.4998 12.0466 50.3465 16.3404 49.2211 22.2768C48.0958 28.2131 51.3159 34.1177 56.8932 36.3447V41" stroke="black" stroke-width="2"></path><path d="M61.5 28V41" stroke="black" stroke-width="2"></path><path d="M79.459 41.8929L83.7031 24.2741L89.989 16.1071L91.8625 26.2394L88.0619 42" stroke="black" stroke-width="2"></path><path d="M93 26L84 24" stroke="black" stroke-width="2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M96.5479 41.2384C96.8502 43.1127 97.0014 45.0084 97 46.9071C96.9445 56.5315 93.0861 65.7405 86.272 72.512L90.9617 102.609L58.0881 112L53.3985 99.0014H39.3065C36.8157 99.0363 34.4135 98.0744 32.6306 96.3281C30.8477 94.5819 29.8308 92.195 29.8046 89.6947V77.9191L19 75.1886L26.5862 52.8833V48.0531C26.5835 45.6853 26.8119 43.323 27.2682 41L96.5479 41.2384Z" stroke="black" stroke-width="2"></path><path d="M48 53C48 56.866 45.0899 60 41.5 60C37.9101 60 35 56.866 35 53" stroke="black" stroke-width="2"></path><path d="M61.5 0V8" stroke="black" stroke-width="2"></path><path d="M74 5L70 11" stroke="black" stroke-width="2"></path><path d="M53 11L49 4" stroke="black" stroke-width="2"></path></svg>
                    <p className='flex text-2xl subtitle-font'>Let's begin learning</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile

