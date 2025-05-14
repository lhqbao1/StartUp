import React from 'react'

const Ping = () => {
    return (
        <div className='relative'>
            <div className='absolute -left-4 top-1'>
                <div className='flex size-[11px]'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75'></span>
                    <span className='size-[11px] rounded-full bg-red-600'></span>
                </div>
            </div>
        </div>
    )
}

export default Ping