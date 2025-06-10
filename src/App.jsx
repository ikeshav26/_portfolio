import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import About from './pages/About'
import { FloatingDockDemo } from '../src/components/FloatingDoc'

const App = () => {
  return (
    <div className=''>
      <div className="fixed top-7/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <FloatingDockDemo/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
