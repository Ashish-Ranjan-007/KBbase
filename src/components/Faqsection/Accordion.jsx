import React from 'react'
import {useState} from 'react'
import {faqdata} from './faqdata'
import AccordionItems from './AccordianItems'



const Accordion = () => {
    const[clicked,setClicked] =useState(0);

    const handleToggle = (index)=>{
    if(clicked===index)
        return setClicked("0");

        setClicked(index);

    }


return (
    <>
        <ul className=''>
            {faqdata.map((faq,index)=>(
             
                <AccordionItems onToggle={()=> handleToggle(index)}
                 active={clicked===index} key={index} faqdata={faq}/>

                ))}
        </ul>
    </>
  )
}

export default Accordion