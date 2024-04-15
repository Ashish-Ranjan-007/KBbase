import React from 'react'
import logos from '../assets/brandlogo'
import { Link } from 'react-router-dom'
import locpin from "../../public/pin.gif"





const About = () => {
  return (
    <>
     <div className='flex flex-col gap-10'>

           {/* About section */}
           <div className='flex flex-col gap-4 justify-center p-4'>
            <h2 className='text-4xl text-center text-linkcolor font-bold'>About Us</h2>
            <p   className="" >We are financial consultants. Finance consultants help customers to get any kind of loans, credit cards as well as the best insurance as per their requirements. Finance consultants, is a part of CX Solution which is Finance consultants parent organization and been found in 2022. Finance consultants are corporate sales channel & comprehensive financial planning consultancy. In terms of offered products, we have Personal Loans, Business Loan, Home Loans, Loan against Property, Auto Loan, Gold Loan, MSME loans, Credit cards, Life Insurance, Term plans, Car Insurance, Health Insurance, Home Insurance etc. Our services are free of cost except the MSMSE Loans services. Financial Consultants have presence in all over India with over 700 branches working under Financial Consultants. </p>
            <p  className="" >
            Financial consultants can provide valuable expertise and guidance when it comes to managing your finances, investments, and overall financial well-being. They can help you create a personalized financial plan, make informed decisions about saving and investing, and navigate complex financial situations. Working with a financial consultant can help you achieve your financial goals and secure your financial future. A personal loan advisor can be beneficial because they have expertise in navigating the personal loan market and can help you find the best loan options tailored to your specific financial situation and needs. They can provide personalized advice, help you understand the terms and conditions of different loan offers, and guide you through the application process. By working with a personal loan advisor, you can save time, compare multiple loan options, and make informed decisions that align with your financial goals.
            </p>

            <p className="" >
            Traditional insurance typically offers standardized coverage options that are designed to meet the needs of a broad range of individuals or businesses. Personalized insurance, on the other hand, takes a more tailored approach by customizing insurance policies to fit the specific needs and preferences of the policyholder. This can include adjusting coverage limits, adding or removing coverage options, and incorporating unique features based on individual circumstances. Personalized insurance aims to provide more targeted and comprehensive coverage that better aligns with the policyholder's specific requirements and risk profile.
            </p>

            <p className="" >
            We at Financial Consultant, we prioritize the needs of our customer by looking in depth of our customers profile and their goals, measuring their financials and then come up with best products they can get to achieve their financial goals. 
            </p>


            <p className="" >
            Financial Consultants are tied with all the nationalized banks of India and we are linked with almost all the NBFCs as well, so we have everything of each bank has to offer which allows us to compare bank’s product and help customer to get best deal among all the products. 
            </p>

            <p className="" >
            Financial Consultants do not charge from customer so our services are free of cost and all the transactions will remain between customers and banks except in MSME loans. 
            </p>

            <p className="" >
            Financial Consultants are working for whole Indian customers online hence customer doesn’t need to visit any branch or bank for any process, if required we will visit the customer’s address and hence everything will be done under customer’s comfort zone.
            </p>
        </div>

        {/* Join Us Banner */}
        <div className='flex flex-col h-40 w-full bg-gray-200 gap-4 p-4'>
            <h2 className='text-2xl font-semibold'>Get any kind of financial aid and consultations from us</h2>
            <div className='flex gap-2'>
                <Link to="/sign-up">
                    <button className='bg-linkcolor hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700'>Sign Up Now</button> 
                </Link> 
                <button className='text-linkcolor font-bold py-2 px-4'>Know More</button>
        
        </div> 

        </div>

        {/* Location Info */}
       <div className='text-center flex flex-col justify-center items-center'>
       <h2 className='text-3xl font-bold text-center text-primarycolor'>Our Workplace</h2>
        <ul className=''>            
            <li>Noida Sector 62</li>
            <li>Block A, Highway tower</li>
            <li>Noida, Uttar Pradesh 201309,India</li>
            <Link to="/"><li> Locate Us on Map <img src={locpin} className='inline-block' alt="mapicon" /></li></Link>
        </ul>

       
       </div>

        {/* partners section */}
        <h2 className='text-3xl font-bold text-center text-primarycolor'>Our Backers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-flow-column justify-items-center content-center gap-4 mx-4">
            {logos.map((logo, index )=>(
                <div  key={index} className=''>
                    <img className="object-fill h-16 w-30 p-2" src={logo.url} alt="brandimage" /></div>

            ))}
        </div>
     </div>
    


    </>
  )
}

export default About