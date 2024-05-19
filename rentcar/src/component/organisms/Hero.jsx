import React from 'react'

function Hero() {
  return (
    <div className='relative grid place-items-center'>
        <img src="public/images/famCar.png" alt="" />
        <img className='absolute bottom-0 lg:w-80 w-24' src="public/images/diskon.png" alt="" />
        
    </div>
  )
}

export default Hero