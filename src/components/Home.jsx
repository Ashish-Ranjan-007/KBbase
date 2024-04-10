import React from 'react'
import Navbar from './Navbar'
import Brands from './Brands'
import Hero from './Hero'
import Carousel from './Carousel'
import Faqpage from './Faqsection/Faqpage'
import { image1, image2, image3, image4 } from '../assets/heroassets'


const cards = [
  { title: 'Card 1', content: 'Content for Card 1' ,image:image1},
  { title: 'Card 2', content: 'Content for Card 2' ,image:image2},
  { title: 'Card 3', content: 'Content for Card 3' ,image:image3},
];



const Home = () => {
  return (
    <>
      <Carousel cards={cards}/>
      <Brands /> 

      
    </>
  )
}

export default Home