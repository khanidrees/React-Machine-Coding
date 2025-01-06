import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const Accordion = ({title, data}) => {
    const [isActive, setIsActive] = useState(false);
    // TODO : fix keyboard nav bug
    // const [height, setHeight] = useState()
    const elementRef = useRef();
    const toggleAccordion= ()=>{
        setIsActive(!isActive)
        if(!isActive){
            elementRef.current.focus({preventScroll:true});
        }
    }
    console.log(!isActive);
  return (
    <div 
    className='container' 
    role=''
    data-expanded={isActive}
    aria-expanded={isActive}
    >
        <button 
        id='header-1'
        className='accordion-header'
        onClick={()=>toggleAccordion()}
        aria-controls='content-1'
        >
            <div className='flex'>
                <div>{title}</div>
                <div><b>{isActive?"-":'+'}</b></div>
            </div>
            
        </button>
        
        <div 
        role="region"//generic element to be focused for 
        aria-labelledby='heading-1'
        tabIndex={0}
        id="content-1"
        className='accordion-body'
        aria-hidden={!isActive}
        ref={elementRef}
        >
            {data}
        </div> 
        
    </div>
  )
}

export default Accordion