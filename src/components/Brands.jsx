import React from 'react'
import logos from '../assets/brandlogo';

const Brands = () => {
  return (
    <>

    {/* Brand logo train display -need to fix the animation and width */}
    <div className='grayscale hover:grayscale-0 m-auto bg-white md:w-[1000px] sm:w-[800px] lg:w-full lg:mx-auto inline-flex min-w-[480px] max-w-[1920px] text-center overflow-hidden justify-center items-center flex-nowrap gap-16 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] aria-hidden:"true"'>
        {logos.map((logo, index )=>(
            <div  key={index} className='w-[200px] animate-infinite-scrollac flex-shrink-0'>
           <img src={logo.url} alt="brandimage" /></div>

        ))}
    </div>
    </>
  )
}

export default Brands

