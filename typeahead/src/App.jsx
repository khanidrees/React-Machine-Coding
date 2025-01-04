import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypeAhead from './components/TypeAhead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> TypeAhead</h1>
      <TypeAhead/>
    </>
  )
}

export default App
