import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContextProvider';

const Input = ({setSubmitted}) => {
    const [value, setValue] =  useState("");

    const [state, toggleState] = useContext(AppContext);

    function submitHandler(){
        if(isNaN(value) || value?.length<10){
            alert("please enter 10 digits of numbers only");
            return;
        }
        toggleState();
    }
  return (
    <div>
        <h3>Enter Mobile number</h3>
        <input 
        type='number'
        value={value}
        onChange={(e)=>setValue(e.target?.value)}
         maxLength={10}/>
        <button onClick={()=>submitHandler()}>Submit</button>
    </div>
  )
}

export default Input