import React from 'react'
import Navbar from './Navbar'
import Brands from './Brands'
import Hero from './Hero'
import CarouselComp from './CarouselComp'
import Faqpage from './Faqsection/Faqpage'
import Footer from './Footer/Footer'


const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-gradherobggreen from-1% via-gradherobgvia via-50% to-gradherobgblue to-99% border">
        <CarouselComp/>
        <Brands />
      </div>
      
      <Footer/> 


      
    </>
  )
}

export default Home

