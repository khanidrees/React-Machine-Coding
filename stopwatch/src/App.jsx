import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

const getFormattedTime= (ms)=>{
  return {
    ms:(ms%1000).toString(),
    seconds : Math.floor((ms/1000)%60).toString(),
    minutes : Math.floor((ms/1000/60)%60).toString(),
    hours : Math.floor((ms/(1000*60*60))%24).toString(),
  }
}

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pastTime, setPastTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timer = useRef();

  const { ms, minutes, seconds, hours } = getFormattedTime(timeElapsed+pastTime);
  useEffect(()=>{
    if(isRunning){
      timer.current = setInterval(()=>{
        setTimeElapsed( new Date() - startDate )
      },100); 
    }else{
      clearInterval(timer.current);
      setPastTime((p)=> p+timeElapsed);
      setTimeElapsed(0);
    }
    return ()=>{
      clearInterval(timer.current);
    }
    
  },[isRunning])
  
  return (
    <>
      {hours?.padStart(2,'0')+" : "+minutes.padStart(2,'0')+" : " +seconds.padStart(2,'0') + " : " + ms.padStart(3,'0')}
      <button onClick={()=>{
        setIsRunning(r=>!r)
        if(!isRunning) {
          setStartDate(new Date())
        }
      }
      }>{isRunning?'stop':"start"}</button>
      <button onClick={()=>{
        clearInterval(timer.current);
        setPastTime(0);
        setTimeElapsed(0);  
        setIsRunning(false);
      }}>clear</button>
    </>
  )
}

export default App
