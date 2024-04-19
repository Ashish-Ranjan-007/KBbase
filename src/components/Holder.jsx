import React from "react";
import { Link } from "react-router-dom";

const Holder = () => {
  return (
    <>
      <h2 className="text-4xl text-primarycolor text-center p-8">KnowledgeBase</h2>
      <div className="flex flex-col sm:flex-col gap-6 justify-center items-center m-8">
        <div className="sticky top-0 flex flex-col lg:flex-row gap-6">
          <Link to="/abhiloans"><div className="w-80 h-60 bg-primarycolor rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Abhi Loans</div></Link>
          <Link to="/bandhan"><div className="w-80 h-60 bg-primarycolor rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Bandhan Bank</div></Link>
          <Link to="/capriloans"><div className="w-80 h-60 bg-primarycolor rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Capri Loans</div></Link>
        </div>

        <div className="sticky top-[20px] flex flex-col lg:flex-row gap-6">
          <Link to="/cholamandalam"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Cholamandalam</div></Link>
          <Link to="/faircent"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Faircent</div></Link>
          <Link to="/fincorp"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Fincorp</div></Link>
        </div>
        <div className="sticky top-[30px] flex flex-col lg:flex-row gap-6">
          <Link to="/finnable"><div className="w-80 h-60 bg-primarygreen rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Finnable</div></Link>
          <Link to="/godrej"><div className="w-80 h-60 bg-primarygreen rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Godrej</div></Link>
          <Link to="/incred"><div className="w-80 h-60 bg-primarygreen rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Incred</div></Link>
        </div>
        <div className="sticky top-[40px] flex flex-col lg:flex-row gap-6">
          <Link to="/kotak"><div className="w-80 h-60 bg-gray-400 rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Kotak Funding</div></Link>
          <Link to="/kotak-policy"><div className="w-80 h-60 bg-gray-400 rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Kotak Policy</div></Link>
          <Link to="/muthoot"><div className="w-80 h-60 bg-gray-400 rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90 ">Muthoot</div></Link>
        </div>
        <div className="sticky top-[50px] flex flex-col lg:flex-row gap-6">
          <Link to="/negative-p"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Negative Policy</div></Link>
          <Link to="/paysense"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Paysense</div></Link>
          <Link to="/piramal"><div className="w-80 h-60 bg-secondarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Piramal </div></Link>
        </div>
        <div className="sticky top-[60px] flex flex-col lg:flex-row gap-6">
          <Link to="/roha-housing"><div className="w-80 h-60 bg-primarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">ROHA Housing</div></Link>
          <Link to="/service-pins"><div className="w-80 h-60 bg-primarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Service Pins</div></Link>
          <Link to="/tata-capital"><div className="w-80 h-60 bg-primarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Tata Capital</div></Link>
        </div>
        <div className="sticky top-[70px] flex flex-col lg:flex-row gap-6">
          <Link to="/upwards"><div className="w-80 h-60 bg-tertiarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Upwards</div></Link>
          <Link to="/wezire"><div className="w-80 h-60 bg-tertiarycyan rounded-md text-white font-extrabold text-[40px] flex justify-center items-center hover:opacity-90">Wezire</div></Link>
          <Link to="/abg-group"><div className="w-80 h-60 bg-tertiarycyan rounded-md text-white font-extrabold text-[40px] text-center flex justify-center items-center hover:opacity-90">Aditya Birla Group</div></Link>
        </div>
      </div>
      
    </>
  );
};

export default Holder;
