import React from 'react'

export default function Text({tittle, price}) {
    return (
        <div className='flex flex-col items-center'>
            <p className='lg:text-[40px] text-3xl font-semibold mb-4'>{tittle}</p>
            <p className='lg:text-[35px] md:text-[20px] font-bold text-2xl'>{price}</p>
        </div>
    )
}
export const TextPrice=({children})=><p className='font-bold text-2xl'>{children}</p>
