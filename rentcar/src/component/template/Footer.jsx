import React from 'react'
import Logo from '../atom/logo'

function Footer() {
    return (
        <div className='p-2 space-y-4 md:flex md:justify-between bg-[#F2F2F2]'>
            <div className='flex flex-col gap-4 md:w-[40%]'>
                <Logo />
                <p>is a web-based application that sells various types of car brands. This application was created to make it easier for buyers so that buyers don't have to visit the place directly to see the car, just go through the website to see the details of the car and also with more flexible times.</p>
                <div className='flex gap-3'>
                    <img className='w-6' src="/images/phone.png" alt="" />
                    <p className='font-medium'>Ridho 0812-7678-4668</p>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='flex gap-3'>
                    <img className='w-6' src="/images/location.png" alt="" />
                    <p className='font-medium'>Find our location</p>
                </div>
                <p>Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota,<br/>
                    Kota Batam, Kepulauan Riau 29461</p>
            </div>
        </div>
    )
}

export default Footer