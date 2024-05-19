


import React, { useEffect, useRef, useState } from 'react'
import { BtnSearch } from './BtnIcon'

function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const inputRef = useRef(null)
    const handleClickOutSide = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setIsExpanded(false)
        }
    }
    const handleClick = () => {
        setIsExpanded(true)
        console.log("ini")
        console.log(isExpanded)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide)
        return () => {
            document.addEventListener("mousedown", handleClickOutSide)
        }
    }, [])
    return (
        <div className={`absolute    border transition-all duration-1000 ease-in-out h-[30px] flex px-3 items-center ${isExpanded ? "bg-white  left-3 right-3 border-black" : "bg-[#C38484] left-[35%] right-[30%]"}  rounded-full px-5 justify-between`} ref={inputRef}>
            <input
                className={`inset-y-0  rounded-full w-[90%]  outline-none bg-transparent  px-2 focus:border-0  border-0   placeholder-black`}
                type="search"
                placeholder='Search '

                onClick={handleClick} />
            <BtnSearch />
        </div>
    )
}

export default SearchBar