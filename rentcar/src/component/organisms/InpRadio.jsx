import React from 'react'

function InpRadio({ children, text1, text2, name, id1,  checked1, id2, onChange, checked2 }) {
    return (
        <>
            <p className='text-red-700 font-medium'>{children}</p>
            <div className="flex flex-col w-full bg-[#F2F2F2] px-2 mb-2">
                <div className="flex items-center">
                    <label
                        htmlFor={id1}
                        className='w-full'>{id1}</label>
                    <input type='radio'
                        onChange={onChange}
                        checked={checked1}
                        id={id1} name={name}
                        value={id1}
                        className='bg-[#F2F2F2] p-2 mr-2' />
                </div>
                <div className="flex items-center">
                    <label
                        htmlFor={id2}
                        className='w-full'>{id2}</label>
                    <input type='radio'
                        onChange={onChange}
                        checked={checked2}
                        id={id2} name={name}
                        value={id2}
                        className='bg-[#F2F2F2] p-2 mr-2' />
                </div>
            </div>
        </>
    )
}

export default InpRadio