import React from 'react'
import {useState} from 'react'
import {faqdata} from './faqdata'
import AccordionItem from './AccordionItem'
// import react from '@vitejs/plugin-react-swc'

const Accordion = () => {
    const[clicked,setClicked] =useState(0);

    // const handleToggle = (index)=>{
    // if(clicked===index)
    //     return setClicked("0");

    //     setClicked(index);

    // }


return (
    <>
        <ul className=''>
            {/* {faqdata.map((faq,index)=>(
             
                <AccordionItem {onToggle{()=> handleToggle(index)}} active={clicked===index} key={index} faqdata={faq}/>
            ))} */}
        </ul>
    </>
  )
}

export default Accordion