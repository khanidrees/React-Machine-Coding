import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Otp from './components/Otp'
// import Input from './components/Input'
import AppContextProvider from './context/AppContextProvider'

function App() {
  

  

  return (
    <AppContextProvider>
    <h2>OTP</h2>
      <Otp/>
    </AppContextProvider>
  )
}

export default App
