import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignInPage from './components/SignInPage';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import Privacy from './components/Privacy';
import Faqpage from './components/Faqsection/Faqpage';
import About from './components/About';
import AdminSignIn from './components/admin/AdminSignIn';
import AdminSignUp from './components/admin/AdminSignUp';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      {/* <Carousel/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/faqs" element={<Faqpage/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/admin/sign-in" element={<AdminSignIn/>}/>
        <Route path="/admin/sign-up" element={<AdminSignUp/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
