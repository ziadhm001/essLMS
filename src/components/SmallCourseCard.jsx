import ToolTip from './Tooltip';
const SmallCourseCard = ({name, description, creator, src, id }) => {
    return (
        <ToolTip tooltip={description} id={id}>
            <div className='flex flex-col w-64 h-max space-y-1 border p-2 group bg-white hover:bg-blue-50 cursor-pointer justify-center'> 
                <div className='justify-center w-full'>
                    <img src={`${name.toLowerCase().includes("mongo") ? '/MongoDB.png' : name.toLowerCase().includes("three") ? '/Three js.jpg' : '/cpp.png' }`} className='shadow-lg rounded border group group-hover:opacity-80 h-40 w-50'/>
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

export default SmallCourseCard