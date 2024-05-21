import React from 'react'
import Navbar from '../organisms/Navbar'
import BtnHeader from '../organisms/BtnHeader'
import { useLocation, useParams } from 'react-router-dom'
import data from '../../Data/data'
import CardDetail from '../organisms/CardDetail'
import { TextPrice } from '../atom/Text'
import { BtnNewSec } from '../molecules/BtnIcon'
import Footer from '../template/Footer'

function Checkout() {
    const { id } = useParams()
    const car = data()
    const detail = car.find(p => p.id == id)
    console.log(detail)
    return (
        <div>
            <Navbar />
            <BtnHeader></BtnHeader>
            <div className='p-4'>

                <CardDetail className={"border p-4"} titleBottom={detail.title} title2={detail.title2} image={detail.image} />
                <div >
                    <p className='text-red-700 font-medium'>Total Harga</p>
                    <div className='w-full bg-red-50 p-2 mb-2'>
                        <TextPrice>{detail.price}</TextPrice>
                    </div>
                    <p className='text-red-700 font-medium'>Alamat Pengantaran</p>
                    <input placeholder='Silahkan isi alamat pengantaran' className='w-full bg-red-50 p-2 mb-2' />
                    <p className='text-red-700 font-medium'>No Hp</p>
                    <input placeholder='Silahkan isi Nomor Hp disini' className='w-full bg-red-50 p-2 mb-2' />
                </div>
                <div className='flex justify-center mt-8'>
                    <BtnNewSec className={"rounded-full"}>Pesan</BtnNewSec>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Checkout