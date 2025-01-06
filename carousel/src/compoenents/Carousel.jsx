import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Carousel = ({data}) => {
    const [currIdx,setCurrIdx] = useState(0);

    let timeout = useRef();

    useEffect(()=>{
        timeout = setTimeout(()=>{
           onNextClick();
        },1500);

        return()=>{
            clearInterval(timeout);
        }

    },[currIdx]);

    const onPrevClick = ()=>{
        setCurrIdx(prev=> prev==0? data?.length-1:prev-1);
       
    }
    const onNextClick = ()=>{
        setCurrIdx(prev=> prev==data?.length-1?0:prev+1);
        
    }
    // console?.log(data[0]?.url);

  return <div>
    <img height={200} src={data?.[currIdx]?.download_url} alt='carousal-image'/>
    <div>
        <button
        onClick={()=>onPrevClick()}
        >prev</button>
        <button
        onClick={()=>onNextClick()}
        >next</button>
    </div>
  </div>
}

export default Carousel