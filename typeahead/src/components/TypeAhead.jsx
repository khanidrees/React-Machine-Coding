
import { useState } from 'react'
import { getSuggestions } from '../apis';
import { useEffect } from 'react';
import { useCallback } from 'react';

function debounced(fn,ms=200){
    let timeout;
    
    return function a(){
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fn.apply(this,arguments);
        },ms)

    }
}

const TypeAhead = () => {
    const [value,setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const abortController = new AbortController();
        if(value){
            debouncedGetNames(value,abortController?.signal);
        }else{
            setSuggestions([]);
        }

        return()=>{
            abortController?.abort();
        }
    },[value])

    
    async function getNames(val,signal){
        setLoading(true);
         getSuggestions(val,signal)
         .then((names)=>{
            console.log('names:',names);
            if(Array.isArray(names)){
                setSuggestions(names);
            }
         })
         .catch((e)=>{
            console.log(e);
         })
         .finally(()=>{
            setLoading(false);
         })
        
    };

    const debouncedGetNames = useCallback(debounced(getNames,300),[]); 

    console.log(debouncedGetNames);
    function inputHandler(val){
        setValue(val);
    }

    function getHighlitedText(val){
        let parts = val?.split(new RegExp(`(${value})`,'gi'));
        console.log(parts);
        return(
            <span>{parts?.map(p=>{
                return p.toLowerCase()=== value?.toLowerCase()? <b>{p}</b>:p;
            })
            }</span>
        )  

    }

    


  return (
    <div className='container'>
        <input 
        type='text' 
        value={value} 
        id='search'
        onChange={(e)=>inputHandler(e.target.value)}/>
        {loading &&
            <div className='suggestion-box'>
                <div className='suggestion-item'>
                    ...Loading
                </div>
            </div>
        }
        {(Array.isArray(suggestions) && suggestions?.length>0 ) &&
            <div className='suggestion-box'>
                {suggestions.map((val,idx)=>{
                    return  <div
                            className='suggestion-item'
                            key={idx}
                            onClick={()=>{
                                setValue(val);
                            }}
                            >
                            {getHighlitedText(val)}
                            </div>
                })
                
                }
            </div>
        }
        
    </div>
    
  )
}

export default TypeAhead