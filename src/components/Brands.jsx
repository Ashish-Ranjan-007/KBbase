import React from 'react'
import logos from '../assets/brandlogo';

const Brands = () => {
  return (
    <>

    {/* Brand logo train display -need to fix the animation and width */}
    <div className='m-auto md:w-[1000px] sm:w-[800px] lg:w-full lg:mx-auto inline-flex min-w-[480px] max-w-[1920px] text-center overflow-hidden justify-center items-center flex-nowrap gap-2 px-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] aria-hidden:"true"'>
        {logos.map((logo, index )=>(
            <div  key={index} className='w-[200px] p-2 bg-gray-100 animate-infinite-scroll flex-shrink-0'>
           {logo.name}</div>

        ))}
    </div>
    </>
  )
}

export default Brands



// 