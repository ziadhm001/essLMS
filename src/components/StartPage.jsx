import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const StartPage =() => {
    let isLoggedIn = false;
    const navigate = useNavigate()
    return (
        <div className='flex flex-col'>
            <Nav />
            <div className='flex flex-row m-auto'>
                <div className='flex flex-col self-center text-justify space-y-6'>
                    <div>
                        <p className='text-6xl title-font'>Learn without limits</p>
                        <p className='text-left text-6xl title-font'>or distractions</p>
                    </div>
                    <div>
                        <p className='text-left text-xl font-extralight'>Start, switch, or advance your career as a teacher or stundent with</p>
                        <p className='text-left text-xl font-extralight'>interactive non distracting courses!, register and start your journey now!</p>
                    </div>
                    {
                        isLoggedIn 
                        ?
                        (                  
                        <div className='space-x-4'>
                            <button className='w-48 hover:bg-blue-800 text-md bg-blue-600 text-white shadow p-4 rounded-lg title-font' onClick={() => navigate('/courses')}>Continue learning</button>
                            <button className='w-72 hover:bg-blue-50 text-md text-blue-600 bg-white border-blue-600 border shadow p-4 rounded-lg title-font'>Create a course</button>
                        </div>
                        )
                        :
                        (                    
                        <div className='space-x-4'>
                            <button className='w-48 hover:bg-blue-800 text-md bg-blue-600 text-white shadow p-4 rounded-lg title-font'>Join for free</button>
                            <button className='w-72 hover:bg-blue-100 text-md text-blue-600 bg-white border-blue-600 border shadow p-4 rounded-lg title-font'>Login and continue your journey</button>
                        </div>
                        )
                    }

                </div>
                <div>
                    <img src='../../public/learner.png'alt='learner'></img>
                </div>
            </div>
            <Footer/>
        </div>  
    );
}

export default StartPage;