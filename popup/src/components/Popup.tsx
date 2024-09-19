import React, { Dispatch } from 'react';
interface Props {
    children:React.ReactNode,
    isOpen: boolean,
    setIsOpen: Dispatch<{ type: string }>
}

const Popup = ({children, isOpen, setIsOpen }:Props) => {
    {if(isOpen) {
        return <div className='container'>
            <div className='content'>
                <button className='close' onClick={setIsOpen}>close</button>
                {children}
            </div>
            
        </div>
    }
    }  
  
}

export default Popup;