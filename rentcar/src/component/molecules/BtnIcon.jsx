import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BtnUser = () => {
    return (
        <button>
            <img width={"30px"} src="/images/user.png" alt="" />
        </button>
    )
}
export const BtnFav = () => {
    return (
        <button>
            <img width={"30px"} src="/images/Fav.png" alt="" />
        </button>
    )
}
export const BtnAddFav = () => {
    return (
        <button className='flex flex-col justify-center items-center'>
            <img width={"25px"} src="/images/Fav.png" alt="" />
            <p className='font-bold text-sm'>Favorite</p>
        </button>
    )
}
export const BtnSearch = () => {
    return (
        <button className='absolute right-4'>
            <img width={"15px"} src="images/searchIcon.png" alt="" />
        </button>
    )
}
export const BtnNewSec = ({ children, className,onClick }) => {
    return (
        <button onClick={onClick} className={`bg-[#AF1313] text-white w-[40%] lg:p-4 lg:text-5xl ${className} p-1`}>{children}</button>
    )
}
export const BtnBackHome = ({ }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
        console.log("diklik")
    }
    return (
        <button onClick={handleClick} className=' w-[15%] lg:p-4 lg:text-5xl p-1 font-semibold'>Home</button>
    )
}
export const BtnBack = ({ }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
        console.log("back")
    }
    return (
        <button onClick={handleClick} className='  lg:p-4 lg:text-5xl p-1 font-semibold'><img className='w-[20px]' src="/images/back.png" alt="ba" /></button>
    )
}
