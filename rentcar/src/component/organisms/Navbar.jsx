import React from 'react'
import Logo from '../atom/logo'
import SearchBar from '../molecules/SearchBar'
import { BtnFav, BtnUser } from '../molecules/BtnIcon'

function Navbar() {
    return (
        <div className='bg-[#F2F2F2] flex w-screen h-[55px] gap-5 items-center justify-between relative px-5'>
            <Logo />
            <SearchBar />
            <div className='space-x-3'>

                <BtnFav />
                <BtnUser />
            </div>

        </div>
    )
}

export default Navbar