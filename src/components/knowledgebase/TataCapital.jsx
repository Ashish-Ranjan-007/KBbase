import React from 'react'
import tatacapa from './pdfs/TataCapital-1.jpg'
import tatacapb from './pdfs/TataCapital-2.jpg'

const TataCapital = () => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <h2 className='font-semibold'>TATA Capital Policy</h2>
        <img src={tatacapa} alt="tataimage"/>
        <img src={tatacapb} alt="tataimage"/>

    </div>
    
  )
}

export default TataCapital