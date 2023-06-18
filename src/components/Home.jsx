import React from 'react';
import SmallCourseCard from './SmallCourseCard'
const Home = () => {
    return (
        <div className='space-x-4'> 
            <SmallCourseCard name={"MongoDB - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Ziad Hazem"}/>
            <SmallCourseCard name={"MongoDB - The full guide!"} description={"A full guide from being a zero to such a hero."} creator={"Ziad Hazem"}/>

        </div>
    )
};

export { Home as default }