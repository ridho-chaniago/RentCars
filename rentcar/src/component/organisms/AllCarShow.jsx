import React from 'react'
import Text from '../atom/Text'
import CarsImage from '../atom/CarsShowImage'
import CarsShow from '../molecules/CarsShow'

function AllCarShow() {
    return (
        <div className='flex justify-center items-center   rounded-t-3xl flex-col md:flex-row overflow-hidden gap-4'>
            <CarsShow
            src={"/images/cars/1.png"}
            title={"BMW 330e"}
            price={"Rp 1.200.400.000"}/>
            <CarsShow
            src={"/images/cars/2.png"}
            title={"BMW M2 C"}
            price={"Rp 1.558.000.000"}/>
            <CarsShow
            src={"/images/cars/4.png"}
            title={"BMW X6"}
            price={"Rp 2.067.000.000"}/>
            <CarsShow
            src={"/images/cars/3.png"}
            title={"BMW M4"}
            price={"Rp 2.608.000.000"}/>
        </div>
    )
}

export default AllCarShow