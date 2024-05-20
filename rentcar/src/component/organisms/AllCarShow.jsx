import React from 'react'
import Text from '../atom/Text'
import CarsImage from '../atom/CarsShowImage'
import CarsShow from '../molecules/CarsShow'
import data from '../../Data/data'
import { useNavigate } from 'react-router-dom'
function AllCarShow() {
    const cars=data()
    const navigate=useNavigate()
    const handleClik=(car)=>{
        console.log("ini di klik" )
        console.log(car)
        navigate(`/detail/${car.id}`)
        
    }
    return (

        <div className='flex justify-center items-center   rounded-t-3xl flex-col md:flex-row overflow-hidden gap-4'>
            {cars.map((car, id)=>
                <CarsShow 
                    key={car.id}
                    src={car.image}
                    title={car.title}
                    price={car.price}
                    onClick={()=>handleClik(car)}
                />
            )}
            {/* <CarsShow
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
            price={"Rp 2.608.000.000"}/> */}
        </div>
    )
}

export default AllCarShow