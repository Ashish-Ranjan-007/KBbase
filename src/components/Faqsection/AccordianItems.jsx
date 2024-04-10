import React from 'react'

const AccordionItems = ({faqdata,onToggle, active}) => {
    console.log(faqdata);
    const {question,answer} = faqdata;
  return (
    <>
    <li className=
    {`accordion_items flex flex-col m-3 ${active ? "active":""} `}>
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

export default AccordionItems