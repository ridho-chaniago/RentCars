import React from 'react'
import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero'
import Main from '../template/Main'
import Footer from '../template/Footer'


function Home() {
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