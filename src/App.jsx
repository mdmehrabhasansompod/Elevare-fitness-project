import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Equipment from './pages/Equipment'
import Membership from './pages/Membership'
import About from './pages/About'
import Contact from './pages/Contact'
import Trainers from './pages/Trainers'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/equipments" element={<Equipment/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App