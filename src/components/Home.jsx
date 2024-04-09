import React from 'react'
import Navbar from './Navbar'
import Brands from './Brands'
import Hero from './Hero'
import Carousel from './Carousel'
import Faqpage from './Faqsection/Faqpage'



const cards = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' },
];



const Home = () => {
  return (
    <>
      <Hero />
      <Carousel cards={cards}/>
      <Brands />

      
    </>
  )
}

export default Home