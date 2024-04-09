import React from 'react'

const AccordionItem = ({faqdata,onToggle}) => {
    console.log(faqdata);
    const {question,answer} = faqdata;
  return (
    <>
    <li className=
    {`accordion_item flex flex-col m-3 ${active ? "active":""} `}>
        <div className='flex justify-between'>
            <div className='bg-gray-200'>{question}</div>
            <button className='control' onClick={onToggle}>+</button>
        </div>
        <div className='answer-wrapper'>
            <div className='answer'>{answer}</div>
        </div> 
    </li>        
    </>
  )
}

export default AccordionItem