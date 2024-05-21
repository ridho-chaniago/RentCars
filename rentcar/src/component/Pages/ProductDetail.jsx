// src/components/ProductDetail.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../Data/data';
import Navbar from '../organisms/Navbar';
import { BtnAddFav, BtnNewSec } from '../molecules/BtnIcon';
import BtnHeader from '../organisms/BtnHeader';
import CardDetail from '../organisms/CardDetail';

const ProductDetail = ({ product }) => {
    const { id } = useParams()
    const car = data()
    const detail = car.find(p => p.id == id)
    const navigate=useNavigate()
    function handleClick(detail){
        navigate(`/checkout/${detail.id}`)
    }

return (
    <>
        <Navbar />
        <BtnHeader />
        <div className="product-detail p-4 ">
            <CardDetail title={detail.title} title2={detail.title2} price={detail.price} image={detail.image}/>
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
                    <BtnNewSec onClick={()=>handleClick(detail)} className={"rounded-full md:text-2xl font-bold md:w-full"}>Beli</BtnNewSec>
                    <BtnAddFav />
                </div>
            </div>
        </div>
    </>
);
};

export default ProductDetail;
