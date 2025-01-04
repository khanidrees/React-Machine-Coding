import React from 'react'
import { useState } from 'react'

const Accordion = ({title, data}) => {
    const [isActive, setIsActive] = useState(false);
    console.log(!isActive);
  return (
    <div 
    className='container' 
    data-expanded={isActive}
    >
        <div 
        className='accordion-header'
        onClick={()=> setIsActive(!isActive)}
        >
            {title}
        </div>
        
        <div 
        className='accordion-body'
        
        >
            {data}
        </div> 
        
    </div>
  )
}

export default Accordion