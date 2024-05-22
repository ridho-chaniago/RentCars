import React, { Component, useState } from 'react'
import Navbar from '../organisms/Navbar'
import BtnHeader from '../organisms/BtnHeader'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../Data/data'
import CardDetail from '../organisms/CardDetail'
import { TextPrice } from '../atom/Text'
import { BtnNewSec } from '../molecules/BtnIcon'
import Footer from '../template/Footer'
import InpRadio from '../organisms/InpRadio'
import InpText from '../organisms/InpText'
import PopUp from '../template/PopUp'

function Checkout() {
    const [popUp, setPopUp] = useState(false)
    const { id } = useParams()
    const car = data()
    const detail = car.find(p => p.id == id)
    const navigate = useNavigate()
    function onClose() {
        setPopUp(false)
        navigate(`/resi/${id}`)
    }
    const price=detail.price
    const [alamat, setAlamat] = useState("")
    const [telp, setTelp] = useState("")
    const [pengambilan, setPengambilan] = useState()
    const [pembayaran, setPembayaran] = useState()
    const handleAlamat = (e) => setAlamat(e.target.value)
    const handleTelp = (e) => setTelp(e.target.value)
    const handleChangePengambilan = (e) => setPengambilan(e.target.value)
    const handleChangePembayaran = (e) => setPembayaran(e.target.value)
    console.log(pengambilan, pembayaran)
    const handleSubmit = (e) => {
        console.log(e.target)
        e.preventDefault()
        if (alamat === "" || telp === "" || pengambilan === "" || pembayaran === "") {
            alert("silahakn isi terlebih dahulu")
        } else {
            setPopUp(true)
        }
        console.log("ini event", e)
    }
    return (
        <div>
            <Navbar />
            <BtnHeader></BtnHeader>
            <div className='p-4'>

                <CardDetail className={"border p-4"} titleBottom={detail.title} title2={detail.title2} image={detail.image} />
                <form onSubmit={handleSubmit}>
                    <div >
                        <p className='text-red-700 font-medium'>Total Harga</p>
                        <div className='w-full bg-[#F2F2F2] p-2 mb-2'>
                            <TextPrice>{detail.price}</TextPrice>
                        </div>
                        <InpRadio
                            checked1={pengambilan === "Delivery"}
                            checked2={pengambilan === "Pick Up"}
                            onChange={handleChangePengambilan}
                            id1={"Delivery"} id2={"Pick Up"} name="pengambilan" >Pengambilan
                        </InpRadio>

                        <InpRadio
                            checked1={pembayaran === "Tunai"}
                            checked2={pembayaran === "Transfer"}
                            onChange={handleChangePembayaran}
                            id1={"Tunai"} id2={"Transfer"} name="Pembayaran" >Metode Pembayaran
                        </InpRadio>
                        <InpText onChange={handleAlamat} placeholder={"Silahkan isi alamat pengantaran"}>Alamat Pengiriman</InpText>
                        <InpText type="number" onChange={handleTelp} placeholder={"Silahkan isi Nomor Telp disini"}>No. Telp</InpText>
                    </div>
                    <div className='flex justify-center mt-8'>
                        <BtnNewSec type="submit" className={"rounded-full"}>Pesan</BtnNewSec>
                    </div>
                </form>
            </div>
            {popUp && (
                <PopUp message={`Order Succesfully`} onClose={onClose} />
            )}
            <Footer />
        </div>
    )
}

export default Checkout