import React from 'react'
import Logo from '../atom/logo'
import SearchBar from '../atom/SearchBar'
import { BtnFav, BtnUser } from '../atom/BtnIcon'

function Navbar() {
  return (
    <div className='bg-orange-50 flex w-full h-[106px] gap-5 items-center  p-5'>
        <Logo/>
        <SearchBar/>
        <BtnFav/>
        <BtnUser/>
    </div>
  )
}

export default Navbar