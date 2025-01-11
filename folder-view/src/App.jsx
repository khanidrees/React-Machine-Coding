// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FolderView from './components/FolderView'
const data= [
  {
    name: 'folder 1',
    children : [
      {
        name : ' f1 child1',
        children:[]
      },
      {
        name : ' f1 child2',
        children:[]
      }
    ]
  },
  {
    name: 'folder 2',
    children : [
      {
        name : ' f2 child1',
        children : [
          {
            name : ' f2c1 child1',
            children:[]
          },
          {
            name : ' f2c1 child2',
            children:[]
          }
        ]
      },
      {
        name : ' f2 child2',
        children:[]
      }
    ]
  },
  
  {
    name : ' folder 3',
    children:[]
  },
  {
    name : ' ffolder 4',
    children:[]
  }
  
]
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Folder View</h2>
      <FolderView data={data} depth={0}/>
    </>
  )
}

export default App
