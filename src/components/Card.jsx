import React from 'react'

// this is a sample card example which is in trial 

const Card = ({title, content, image}) => {
  return (

    <>
    <h1>CARD</h1>
    <div className='card bg-gray-700 text-blue-500 flex flex-col justify-center items-center'>
        <h2 className='text-linkcolor'>this{title}</h2>
        <p className='text-linkcolor'>this{content}</p>
        <img src={image} alt='image'/> 
    </div>
    </>
  
  )
}

export default Card   