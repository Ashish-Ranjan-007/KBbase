import React from 'react'
import { Link } from 'react-router-dom'


const abg = "https://oneapp.abfldirect.com/b2c/login?dsa_hash=3e27635327886c70cbe3ec6144d6ec71cb47a0f0de1dee9c891af52d428828bb"

const Loginlink = () => {
  return (
     <div className='p-4 text-primarycolor font-semibold'> Login to Aditya Birla Group
    <Link to={abg}><button className='m-3 p-2 rounded-sm bg-linkcolor text-white'>Login</button></Link></div>
   
  )
}



export default Loginlink