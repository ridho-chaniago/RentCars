import React from 'react'
import { BtnNewSec } from '../molecules/BtnIcon'
import CarType from '../molecules/CarType'
import MerkCar from '../atom/MerkCar'
import AllCarShow from '../organisms/AllCarShow'

function Main() {
    return (
        <div className='my-4 px-5'>
            <div className='flex my-8 justify-around'>
                <BtnNewSec>Baru</BtnNewSec>
                <BtnNewSec>Second</BtnNewSec>
            </div>
            <CarType />
            <div className='flex gap-5 md:gap-10 justify-center'>
                <MerkCar src={"public/images/merk/hyundai.png"} />
                <MerkCar src={"public/images/merk/nissan.png"} />
                <MerkCar src={"public/images/merk/honda.png"} />
                <MerkCar src={"public/images/merk/suzuki.png"} />
                <MerkCar src={"public/images/merk/bmw.png"} />
                <MerkCar src={"public/images/merk/chevrolet.png"} />
            </div>
            <div className='p-5 bg-[#620707] my-10'>
                <AllCarShow />
            </div>
        </div>
    )
}

export default Main