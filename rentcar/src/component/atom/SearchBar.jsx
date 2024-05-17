import React from 'react'

function SearchBar() {
    return (
        <div className='bg-[#C38484] w-full h-[55px] flex p-3 items-center rounded-full px-5 justify-between'>
            <input className='outline-none px-5 focus:border-0 border-0 bg-transparent w-full placeholder-black' type="search" placeholder='Search' />
            <button>
                <img src="public/images/searchIcon.png" alt="" />
            </button>
        </div>
    )
}

export default SearchBar