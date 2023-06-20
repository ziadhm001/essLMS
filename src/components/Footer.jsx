
const Footer = ({ fixed }) => {
    return (
        <div className={`w-full ${fixed ? "fixed" : ""}  bottom-0 h-48 mt-auto bg-slate-900 flex flex-col p-12 pt-8 space-y-6`}>
            <div className='flex flex-row justify-between'>
                <p className='text-white subtitle-font text-md'>Top companies choose <span className='text-blue-300'>ESS</span> Business to build in-demand career skills.</p>
                <div className='flex flex-row space-x-6'>
                    <img src='../../public/wp.svg'alt='learner'/>
                    <img src='../../public/netapp.svg'alt='learner'/>
                    <img src='../../public/eventbrite.svg'alt='learner'/>
                </div>
            </div>
            <hr className='bg-slate-700 border-t-1 border-slate-500 w-1/2 m-auto'></hr>

            <div className='flex justify-end'>
                <div className='flex justify-start'>
                    <img className='h-12' src="../../public/ess.png" alt="Store Logo" />
                </div>
                <div className='flex flex-row w-full justify-end mt-auto'>
                        <p className='text-white font-mono text-xs text-right'>© 2023 ESS Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;

