import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../public/mediaicons/facebook.png";
import instagram from "../../../public/mediaicons/instagram.png";
import social from "../../../public/mediaicons/social.png";
import whatsapp from "../../../public/mediaicons/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="px-4">
        <h1 className="text-6xl">Get your quote here </h1>
        <h1 className="text-6xl">with FinancialConsultants</h1>
        <Link to="/Sign-up">
          <button className="bg-linkcolor hover:bg-blue-700 text-white font-bold py-2 px-4 border my-5  border-blue-700">
            Sign Up Now
          </button>
        </Link>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 bg-footerbg gap-4">
        <div className="row-span-2 text-justify ">
          <h2 className="text-xl font-bold text-linkcolor">
            Financial Consultants
          </h2>
          <p>
            We are financial consultants. Finance consultants help customers to
            get any kind of loans, credit cards as well as the best insurance as
            per their requirements. Finance consultants, is a part of CX
            Solution which is Finance consultants parent organization and been
            found in 2022. Finance consultants are corporate sales channel &
            comprehensive financial planning consultancy. In terms of offered
            products, we have Personal Loans, Business Loan, Home Loans, Loan
            against Property, Auto Loan, Gold Loan, MSME loans, Credit cards,
            Life Insurance, Term plans, Car Insurance, Health Insurance, Home
            Insurance etc. Our services are free of cost except the MSMSE Loans
            services. Financial Consultants have presence in all over India with
            over 700 branches working under Financial Consultants.
          </p>
        </div>
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 text-linkcolor font-semibold">
          <ul className="">
            <h2 className="font-bold">LOANS</h2>
            <li>Personal loan</li>
            <li>Business loan</li>
            <li>Gold loan</li>
            <li>Car loan</li>
            <li>Used car loan</li>
            <li>Mortgage loan</li>
            <li>Home loan</li>
            <li>Loan against property</li>
            <li>MSME</li>
          </ul>

          <ul>
            <h2 className="font-bold">BANKING</h2>
            <li>OverDraft Limit</li>
            <li>Credit card Limit</li>
            <li>Credit cards</li>
          </ul>
          <ul>
            <h2 className="font-bold">INSURANCE</h2>
            <li>Motor insurance</li>
            <li>Health insurance</li>
            <li>Life insurance</li>
            <li>Travel insurance</li>
          </ul>
          <ul>
            <h2 className="font-bold">MUTUAL FUNDS</h2>
            <li>IPO</li>
          </ul>
          <ul>
            <h2 className="font-bold">CONSULTATIONS</h2>
            <li>Personal financial advising</li>
          </ul>
          <ul>
            <h2 className="font-bold">COMPANY</h2>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Grievance Redressal</li>
          </ul>

          <ul className="">
            <h2 className="font-bold">FIND US ONLINE</h2>
            <div className="flex gap-3 h-8">
              <img src={facebook} alt="fbicon" />
              <img src={instagram} alt="instaicon" />
              <img src={social} alt="gmailicon" />
              <img src={whatsapp} alt="whatsappicon" />
            </div>
          </ul>
          <ul className="">
            <h2 className="">REGD. OFFICE ADDRESS</h2>
            <div className="text-xs text-primarycolor">
              <li>Financial Consultant</li>
              <li>Noida Sector 62 Block A,</li>
              <li>Highway tower Noida,</li>
              <li>Uttar Pradesh 201309</li>
              <li>India</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
