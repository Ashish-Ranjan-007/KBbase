import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Brands from './components/Brands';
import SignInPage from './components/SignInPage';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import Privacy from './components/Privacy';
import Faqpage from './components/Faqsection/Faqpage';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/FAQs" element={<Faqpage/>}/>
        <Route path="/*" element={<Home/>}/>

      </Routes>
    </Router>
  
    </>
  )
}

export default App
