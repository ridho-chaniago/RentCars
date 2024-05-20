import React from 'react'
import Text from '../atom/Text'
import CarsShowImage from '../atom/CarsShowImage'

function CarsShow({src,title,price,onClick}) {
    return (
        <div onClick={onClick} className='flex justify-center items-center bg-white w-full md:h-[300px] pb-6 rounded-t-3xl flex-col overflow-hidden'>
            <CarsShowImage src={src}/>
            <Text tittle={title} price={price}/>
            
        </div>
    )
}

export default CarsShow