import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ITEM_HEIGHT= 100;
const LIST_HEIGHT= 500;

const list = Array.from({
  length: 1000,
},(_,idx)=>{
  return {
    id:idx,
    title:"title "+idx,
  }
})

function App() {
    const [indices, setIndices] = useState({
      startIdx:0,
      endIdx: Math.floor(LIST_HEIGHT/ITEM_HEIGHT)
    })

    const filteredlist = list.slice(indices?.startIdx,indices?.endIdx);
  return (
    <div 
      
      style={{height:LIST_HEIGHT+'px', width:'500px', overflow: 'auto'}}
      onScroll={function(e){
        const {scrollTop, scrollHeight, clientHeight } = e.target;
          console.log(scrollHeight,",",scrollTop,",",clientHeight);
        setIndices({
          startIdx: Math.floor(scrollTop/ITEM_HEIGHT),
          endIdx :  Math.floor(scrollTop/ITEM_HEIGHT)+Math.floor(LIST_HEIGHT/ITEM_HEIGHT),
        })
      }} 
      >
      
      <div
      style={{height:ITEM_HEIGHT*list?.length+'px', width:'100%',position:'relative'}}
      >
      {filteredlist.map((item,idx)=>{
          return( <div
                    key={item?.id} 
                     style={{height: ITEM_HEIGHT+'px',position:'absolute',top:(indices.startIdx+idx)*ITEM_HEIGHT}}>
              <h2>{item?.title}</h2>
            </div>)
        })

        }
      </div>
    </div>
  )
}

export default App
