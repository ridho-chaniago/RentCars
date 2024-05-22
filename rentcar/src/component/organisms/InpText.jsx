import React from 'react'

function InpText({ children, placeholder,onChange,type }) {
    return (
        <>
            <p className='text-red-700 font-medium'>{children}</p>
            <input placeholder={placeholder} type={type} onChange={onChange} className='w-full bg-[#F2F2F2] p-2 mb-2' />
        </>
    )
}

export default InpText