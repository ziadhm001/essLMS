import React from 'react';
import ToolTip from './Tooltip';
const SmallCourseCard = ({name, description, creator }) => {
    return (
        <ToolTip tooltip={description}>
            <div className='flex flex-col w-64 h-52 space-y-1 border p-2 group bg-white hover:bg-blue-50 cursor-pointer'> 
                <div>
                    <img src='../../public/course.jpeg' className='shadow-lg rounded border group group-hover:opacity-80'/>
                </div>
                <div>
                    <p className='subtitle-font text-sm'>{name}</p>
                </div>
                <div>
                    <p className='subtitleL-font text-xs text-gray-700'>{creator}</p>
                </div>

            </div>
        </ToolTip>
    )
};

export { SmallCourseCard as default }