import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/Accordion'
const data =[
  {
    id:1,
    title:'first ',
    data:'Lorem nostrud sunt non id duis consectetur. Commodo veniam ipsum cupidatat adipisicing voluptate fugiat nostrud nisi. Quis dolor proident veniam eu esse anim aute excepteur. Id cillum Lorem incididunt duis do sint anim ex sit cillum. Culpa est pariatur cupidatat deserunt. Lorem nostrud sunt non id duis consectetur. Commodo veniam ipsum cupidatat adipisicing voluptate fugiat nostrud nisi. Quis dolor proident veniam eu esse anim aute excepteur. Id cillum Lorem incididunt duis do sint anim ex sit cillum. Culpa est pariatur cupidatat deserunt.'
  },{
    id:2,
    title:'second ',
    data:'Dolor aliqua sunt pariatur laboris eu minim aliqua ex id. Nostrud velit pariatur Lorem nisi officia dolor veniam ad mollit mollit magna velit. Occaecat ut magna minim sit sint consectetur commodo irure laboris Lorem deserunt fugiat. Officia enim quis culpa duis nisi proident deserunt magna qui qui officia voluptate.'
  }
  ,{
    id:3,
    title:'first ',
    data:'Lorem nostrud sunt non id duis consectetur. Commodo veniam ipsum cupidatat adipisicing voluptate fugiat nostrud nisi. Quis dolor proident veniam eu esse anim aute excepteur. Id cillum Lorem incididunt duis do sint anim ex sit cillum. Culpa est pariatur cupidatat deserunt.'
  },{
    id:4,
    title:'second ',
    data:'Dolor aliqua sunt pariatur laboris eu minim aliqua ex id. Nostrud velit pariatur Lorem nisi officia dolor veniam ad mollit mollit magna velit. Occaecat ut magna minim sit sint consectetur commodo irure laboris Lorem deserunt fugiat. Officia enim quis culpa duis nisi proident deserunt magna qui qui officia voluptate.'
  }
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Accordion</h2>
      {data?.map((acc,idx)=>{
        return <Accordion
          key={idx}
          title={acc?.title}
          data={acc?.data}
        />
      })

      }
      
    </>
  )
}

export default App
