// import React from 'react'
// import Card from './Card'
// import { useState,useEffect } from 'react';
// import './Carousel.css';
// import Hero from './Hero';

// // this is a custom carousel with external css file without tailwind -needs refinement if implemented

// const Carousel = ({cards}) => {
//   const [currentIndex,setCurrentIndex]=useState(0);

//   const nextCard=()=>{
//     setCurrentIndex((prevIndex)=>(prevIndex=== cards.length-1?0:prevIndex+1));

//   }
  
//   const prevCard=()=>{
//     setCurrentIndex((prevIndex)=>(prevIndex===0 ? cards.length-1: prevIndex-1));
//   }
  


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextCard();
//     }, 3000); // Change the interval duration (in milliseconds) as needed

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentIndex]);

//   return (
// <>
// <div className="carousel m-auto">
//       <div className="cards-container">
//         {cards.map((card, index) => {
//           let cardClassName = 'card';
//           if (index === currentIndex) {
//             cardClassName += ' active';
//           } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
//             cardClassName += ' prev';
//           } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
//             cardClassName += ' next';
//           }
//           return (
//             <div key={index} className={cardClassName}>
//               <Card title={card.title} content={card.content} image={card.image}/>
//               <Hero /> 
//             </div>
//           );
//           })}
//        <button onClick={prevCard}>Prev</button>
//        <button onClick={nextCard}>Next</button>
       
//       </div>
// </div>
      
// </>
//   );
// };



// export default Carousel