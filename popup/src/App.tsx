import { useReducer } from 'react'
import Popup from './components/Popup';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useReducer((s)=>!s, false);

  return (
    <>
      <div onClick={setIsOpen}> open modal </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          my popup data
        </div>
      </Popup>
    </>
  )
}

export default App
