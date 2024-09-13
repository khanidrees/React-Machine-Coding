import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TabView from './components/TabView';

const tabList = [
    {
        label:"Home",
        content: <Home/>
    },
    {
        label:"About",
        content: <About/>
    },
    {
        label: "Contact",
        content: <Contact/>
    }
  ]


function App() {
    return <TabView tabList={tabList}/>
}

export default App
