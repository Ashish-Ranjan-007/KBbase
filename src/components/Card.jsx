import React from 'react'
// this is a sample card example which I was trying

const Card = ({title, content}) => {
  return (
    <div className='card bg-gray-700 flex flex-col justify-center items-center'>
        <h2 className=''>{title}</h2>
        <p className=''>{content}</p>
    </div>
  
  )
}

export default Card 