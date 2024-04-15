import React from 'react'
import { Link } from 'react-router-dom'


// the Hero component is currently showing the heading and tags add images here 

const herodata =
 {  "heading" : "Advanced Loan Solutions",
    "subheading" : "for India's finest disruptors",
    "tags": "100+ services | Ease of access | Best Offers",
     
}

const Hero = () => {
  return (
    <div className='h-[500px] w-full bg-white opacity-100'>
      <div className='flex flex-col flex-wrap gap-6 p-10'>
      <div className='flex flex-col flex-wrap gap-2 max-w-[600px]'>
      <h1 className='font-bold text-4xl text-linkcolor'>{herodata.heading}</h1>
        <h1 className='font-bold text-4xl text-primary'>{herodata
        .subheading}</h1>
      </div>
        <span><h3>{herodata.tags}</h3></span>
        <div className='flex gap-2'>
        <Link to="/sign-up"><button className='bg-linkcolor hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700'>Sign Up Now</button> 
           </Link> 
            <button className='text-linkcolor font-bold py-2 px-4'>Know More</button>
        
        </div> 
      </div>
    </div>
  )
}

export default Hero

