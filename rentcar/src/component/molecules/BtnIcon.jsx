import React from 'react'

export const BtnUser = () => {
    return (
        <button>
            <img width={"30px"} src="public/images/user.png" alt="" />
        </button>
    )
}
export const BtnFav = () => {
    return (
        <button>
            <img width={"30px"} src="public/images/fav.png" alt="" />
        </button>
    )
}
export const BtnSearch = () => {
    return (
        <button className='absolute right-4'>
            <img width={"15px"} src="public/images/searchIcon.png" alt="" />
        </button>
    )
}
export const BtnNewSec = ({children}) => {
    return (
        <button className='bg-[#AF1313] text-white w-[40%] lg:p-4 lg:text-5xl p-1'>{children}</button>
    )
}