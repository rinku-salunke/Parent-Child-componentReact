import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Templates/Header'
import Home from './Templates/Home'
import About from './Templates/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='home' element={<Home/>}></Route>
        <Route path='aboutus' element={<About/>}></Route>
        <Route path='service' element={<OurServices/>}></Route>
        <Route path='syllabus' element={<Syllabus/>}></Route>
        <Route path='enquiry' element={<Enquiry/>}></Route>
        <Route path='signin' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
