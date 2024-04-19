import React from "react";
import logo from "../../public/fclogo.svg";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";


// needs final touches and dropdown and on hover menus

function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <>
      <nav className="bg-white shadow-sm font-fubuntu w-full flex justify-between items-center border py-2 px-3 gap-3 ">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img className="w-40 h-[60px]" src={logo} alt="image" />
          </Link>
          {/* <Link to="/">
            <h1 className="font-bold text-sm sm:text-md md:text-2xl text-primaryblue">
              FinancialConsultants
            </h1>
           */}
        </div>
        <div className=" hidden lg:flex gap-3 text-md xl:text-xl text-primarycolor relative ">
          <Link to="/">
            <button className="hover:text-linkcolor ">
              {/* <DropdownComp head={"Loan"} /> */} Loans
            </button>
          </Link>
          <Link to="/">
            <button className="hover:text-linkcolor ">Banking</button>
          </Link>
          <Link to="/">
            <button className="hover:text-linkcolor ">Insurance</button>
          </Link>
          <Link to="/">
            <button className="hover:text-linkcolor ">Mutual-Funds</button>
          </Link>
          <Link to="/">
            <button className="hover:text-linkcolor ">Consultations</button>
          </Link>
        </div>
        <div className="flex gap-3 justify-center items-center ">
          {!isSignedIn ? (
            <>
              <Link to="/sign-in">
                <button className="border m-0 border-primaryblue text-linkcolor py-1 px-2 rounded-sm">
                  Login
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="bg-primaryblue text-white py-1 px-2 rounded-sm">
                  SignUp
                </button>
              </Link>
              <button className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="hamburger"
                  className="w-8 h-8"
                >
                  <g fill="#134563">
                    <path d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z">
                    </path>
                  </g>
                </svg>
              </button>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
