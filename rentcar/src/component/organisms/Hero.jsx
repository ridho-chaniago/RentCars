import React from 'react'

function Hero() {
  return (
    <div className='relative grid place-items-center'>
      <img src="/images/famCar.png" alt="" />
      <img className='absolute bottom-0 lg:w-80 w-24' src="/images/diskon.png" alt="" />

    </div>
  )
}

export default Hero