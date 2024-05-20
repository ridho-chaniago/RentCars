import React from 'react'
import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero'
import Main from '../template/Main'
import Footer from '../template/Footer'
import data from '../../Data/data'


function Home() {
    const product=data()
    console.log(product)
    return (
        <div className='box-content'>
            <Navbar />
            <Hero />
            <Main />
            <Footer/>
        </div>
    )
}

export default Home