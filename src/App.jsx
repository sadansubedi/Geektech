import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='text-center text-green-900 bg-gray-400'>Hello guys whats up</h1>
     */}
     <BrowserRouter>
     
     <Navbar/>
     <ItemList/>
     </BrowserRouter>
     
    </>
  )
}

export default App
