import React from 'react'

function MerkCar({src}) {
  return (
    <button>

      <img className='md:w-20 md:h-auto w-8 h-6' src={src} />
    </button>
  )
}

export default MerkCar