import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppContextProvider';
import Input from './Input';

const Otp = ({ length = 4 }) => { 
    const [state, toggleState] = useContext(AppContext);
    const [values, setValues] = useState(new Array(length)?.fill(""));
    const inputRefs = useRef(new Array(length)?.fill(null));

    useEffect(()=>{
        if(inputRefs.current?.[0]){
            console.log('inputRefs.current[0]', inputRefs.current[0])
            inputRefs.current[0].focus();
        }
        
    },[state]);

    function inputHandler(value,index){
        if(isNaN(value)) return;
        // console.log(value);
        // console.log(index);
        let newValues = [...values];
        newValues[index] = value?.slice(value?.length-1);//assign the last letter
        // console.log(newValues);
        setValues(newValues);
        if(value && index+1<length){
            inputRefs?.current[index+1].focus();
        }
        
    }
    function clickHandler(event,index){
        console.log(event);
        inputRefs?.current[index].setSelectionRange(1,1)
    }

    function onKeyDownHandler(e,idx){
        let key = e.key;
        console.log(key)

        if(key == "Backspace" && values[idx]=="" && idx>0){
            inputRefs?.current[idx-1]?.focus();
        }

    }

    
    function submitHandler(){
        //verify logic api call
       if(values?.every((v)=>v!="")) {
        alert("otp submitted")
       }
    }

    // console.log('inputRefs', inputRefs);

    if(!state){
        return <Input />
      }

  return (
    <div >
        <div>
           {values?.map((value,idx)=>{
                
                return <input
                type='text'
                key={idx}
                ref={(input)=>inputRefs.current[idx]=input}   
                value={value}
                style={{width:40,height:40,fontSize:24,textAlign:'center',marginLeft:16}}
                onChange={(e)=>inputHandler(e.target?.value,idx)}
                onClick={(e)=>clickHandler(e,idx)}
                onKeyDown={(e)=>onKeyDownHandler(e,idx)}
                />
           })

           } 
        </div>
        <button onClick={()=>submitHandler()}>Verify</button>
        
    </div>
  )
}

export default Otp