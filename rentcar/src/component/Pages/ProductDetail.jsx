// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/data';
import Navbar from '../organisms/Navbar';
import { BtnAddFav, BtnBack, BtnBackHome, BtnNewSec } from '../molecules/BtnIcon';

const ProductDetail = ({ product }) => {
    const { id } = useParams()
    const car = data()
    const detail = car.find(p => p.id == id)
    console.log(detail)
    if (!detail) {
        return <div>Select a product to see the details.</div>;
    }

    return (
        <>
            <Navbar />
            <div className=' flex justify-between'>
                <BtnBack />
                <BtnBackHome />

            </div>
            <div className="product-detail p-4 ">
                <div className='md:flex '>
                    <div className='flex flex-col items-center md:w-[60%] ' >
                        <h1 className='font-bold text-[35px] '>{detail.title}</h1>
                        <img className='w-full ' src={detail.image} alt={detail.title} />
                    </div>
                    <div className='space-y-2 md:pt-16' >
                        <p className='font-bold'>{detail.title} {detail.title2}</p>
                        <p>STNK dan BPKB asli & sesuai*<br />
                            Pajak : 2024-07-01<br />
                            Dokumen Lengkap a/n : 2 Perorangan<br />
                            Odometer : 113,604 km<br />
                            Transmisi : AT<br />
                            Plat : Ganjil / Genap<br />
                            Warna : Abu-Abu</p>
                        <p className='font-bold text-2xl'>{detail.price}</p>
                    </div>
                </div>
                <div className='mt-3 md:flex'>
                    <div className="font-thin md:w-[60%]">
                        <p>All Inclusive Price</p>
                        <ul className='list-disc list-inside'>
                            <li>1-Year Warranty (Engine, Transmission, AC) Learn More</li>
                            <li>Road Tax</li>
                            <li>1 Year TLO Insurance</li>
                        </ul>
                    </div>
                    <div className='flex justify-around py-4 md:pr-4 md:w-[40%] md:gap-8'>
                        <BtnNewSec className={"rounded-full md:text-2xl font-bold md:w-full"}>Beli</BtnNewSec>
                        <BtnAddFav />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
