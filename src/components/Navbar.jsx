import React from 'react'
import logo from "../../public/FCTEMP.png"
import { Link } from 'react-router-dom';
import { useUser , SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// needs final touches and dropdown and on hover menus

function Navbar() {

  const { isSignedIn, user, isLoaded } = useUser();
  return (
   <>
    <nav className='sticky top-0 bg-white shadow-mdfont-fubuntu w-full flex justify-between items-center h-20'>
        <div className='flex justify-evenly items-center m-2'>
          {/* <img className= "w-10 h-10 object-fill" src={logo} alt="image"/> */}
          <h1 className='font-bold'><Link to="/">FinancialConsultants</Link></h1>
        </div>
        <div className='flex gap-2 font-semibold'>
          <div className='hover:text-linkcolor'><Link to="/">Loans</Link></div>
          <div className='hover:text-linkcolor'><Link to="/">Banking</Link></div>
          <div className='hover:text-linkcolor'><Link to="/">Insurance</Link></div>
          <div className='hover:text-linkcolor'><Link to="/">Mutual-Funds</Link></div>
          <div className='hover:text-linkcolor'><Link to="/">Consultations</Link></div>
        </div>
        <div className='flex gap-4 m-2'>  
          {/* <SignedOut> */}
            <> {!isSignedIn?  
            <>
              <Link to="/sign-in"><button className='bg-linkcolor hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 '>Login</button></Link>
              <Link to="/sign-up"><button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent'>SignUp</button></Link>
          </>
          :  <UserButton /> } </>
          {/* // </SignedOut> */}
        </div>
        {/* // <div className='flex gap-4 m-2'> 
        //  <SignedIn>
        //     <UserButton />
        //   </SignedIn> 
        // </div> */}
       

    </nav>
   </>
  )
}

export default Navbar