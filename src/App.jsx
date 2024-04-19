import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignInPage from './components/SignInPage';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';

import Faqpage from './components/Faqsection/Faqpage';
import About from './components/About';
import Terms from './components/Terms';
import Container from './components/knowledgebase/Container';
import Holder from '../src/components/Holder';
import Cholamandalam from './components/knowledgebase/Cholamandalam';
import Faircent from './components/knowledgebase/Faircent';
import Fincorp from './components/knowledgebase/Fincorp';
import Finnable from './components/knowledgebase/Finnable';
import GodrejPolicy from './components/knowledgebase/GodrejPolicy';
import Incred from './components/knowledgebase/Incred';
import Kotakfunding from './components/knowledgebase/Kotakfunding';
import Muthoot from './components/knowledgebase/Muthoot';
import NegativePolicy from './components/knowledgebase/NegativePolicy';
import Paysense from './components/knowledgebase/Paysense';
import Piramal from './components/knowledgebase/Piramal';
import RohaHousing from './components/knowledgebase/RohaHousing';
import Servicepins from './components/knowledgebase/Servicepins';
import TataCapital from './components/knowledgebase/TataCapital';
import Upwards from './components/knowledgebase/Upwards';
import Wezire from './components/knowledgebase/Wezire';
import Bandhan from './components/knowledgebase/Bandhan';
import Capriloans from './components/knowledgebase/Capriloans';
import Abhiloans from './components/knowledgebase/Abhiloans';
import KotakPolicy from './components/knowledgebase/KotakPolicy';
import JourneyFlow from './components/knowledgebase/abgp/JourneyFlow';
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

        <Route path="/faqs" element={<Faqpage/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/*" element={<Home/>}/>
        <Route path='/terms-and-conditions' element={<Terms/>}/>
        {/* <Route path='/container' element={<Container/>}/> */}
        <Route path="/abhiloans" element={<Abhiloans/>}/>
        <Route path="/bandhan" element={<Bandhan/>}/>
        <Route path="/capriloans" element={<Capriloans/>}/>
        <Route path="/cholamandalam" element={<Cholamandalam/>}/>
        <Route path="/faircent" element={<Faircent/>}/>
        <Route path="/fincorp" element={<Fincorp/>}/>
        <Route path="/finnable" element={<Finnable/>}/>
        <Route path="/godrej" element={<GodrejPolicy/>}/>
        <Route path="/incred" element={<Incred/>}/>
        <Route path="/kotak" element={<Kotakfunding/>}/>
        <Route path="/kotak-policy" element={<KotakPolicy/>}/>
        <Route path="/muthoot" element={<Muthoot/>}/>
        <Route path="/negative-p" element={<NegativePolicy/>}/>
        <Route path="/paysense" element={<Paysense/>}/>
        <Route path="/piramal" element={<Piramal/>}/>
        <Route path="/roha-housing" element={<RohaHousing/>}/>
        <Route path="/service-pins" element={<Servicepins/>}/>
        <Route path="/tata-capital" element={<TataCapital/>}/>
        <Route path="/upwards" element={<Upwards/>}/>
        <Route path="/wezire" element={<Wezire/>}/>
        <Route path="/holder" element={<Holder/>}/>
        <Route path="/abg-group" element={<JourneyFlow/>}/>

      </Routes>
    </Router>
  
    </>
  )
}

export default App
