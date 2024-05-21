import React from 'react'
import { TextPrice } from '../atom/Text'

function CardDetail({title,titleBottom, title2, price, image, className}) {
    return (
        <div className='md:flex mt-8'>
            <div className={`flex flex-col items-center md:w-[60%] `} >
                <h1 className='font-bold text-[35px] '>{title}</h1>
                <img className={`w-full ${className}`} src={image} alt={title} />
                <h1 className='font-bold text-[35px] '>{titleBottom}</h1>
            </div>
            <div className='space-y-2 md:pt-16' >
                <p className='font-bold'>{title} {title2}</p>
                <p>STNK dan BPKB asli & sesuai*<br />
                    Pajak : 2024-07-01<br />
                    Dokumen Lengkap a/n : 2 Perorangan<br />
                    Odometer : 113,604 km<br />
                    Transmisi : AT<br />
                    Plat : Ganjil / Genap<br />
                    Warna : Abu-Abu</p>
                <TextPrice>{price}</TextPrice>
            </div>
        </div>
    )
}

export default CardDetail