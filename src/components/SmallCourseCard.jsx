import ToolTip from './Tooltip';
const SmallCourseCard = ({name, description, creator, src }) => {
    return (
        <ToolTip tooltip={description}>
            <div className='flex flex-col w-64 h-max space-y-1 border p-2 group bg-white hover:bg-blue-50 cursor-pointer'> 
                <div>
                    <img src={src} className='shadow-lg rounded border group group-hover:opacity-80 h-40 w-full'/>
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