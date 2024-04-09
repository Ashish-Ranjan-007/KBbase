import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider appearance={
      {
        // layout is used as a customization to add privacy policy , terms & conditions links
        layout:{
          privacyPageUrl:"/privacy",
          termsPageUrl:"/terms&conditions"
        }
      }
    } publishableKey={PUBLISHABLE_KEY}> 
      <App />      
    </ClerkProvider>
  </React.StrictMode>
)
{/* <React.StrictMode>

  <App />      

</React.StrictMode> */}

