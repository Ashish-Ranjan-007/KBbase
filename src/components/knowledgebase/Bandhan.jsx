import React from 'react'
import bandimga from './pdfs/bandhan.jpg'
import bandimgb from './pdfs/bandhan2.jpg'


const Bandhan = () => {
  return (<>
    <div>
        <h2>Bandhan Bank</h2>
        <img src={bandimga} alt="image" />
    </div>
      <div>
      <h2>Bandhan Bank Doctor Programme</h2>
      <img src={bandimgb} alt="image" />
  </div>
  </>
  )
}

export default Bandhan