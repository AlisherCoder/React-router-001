import React from "react";
import arrow from "../../assets/Arrow.png";
import hero from "../../assets/Illustration.svg";
import { NavLink } from "react-router-dom";

const Hero = () => {
   return (
      <div className="bg-[#1C1E53]">
         <div className="w-full container grid grid-cols-1 pt-[126px] pb-[128px] gap-[60px] lg:grid-cols-2 ]">
            <div className="max-w-[582px]">
               <h1 className="text-[54px] text-[#fff] mb-6 font-semibold">Building stellar websites for early startups</h1>
               <p className="text-[#BBBBCB] leading-[28px] mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               <div className="flex gap-[40px] items-center">
                  <NavLink to="/work">
                     <button className="px-14 py-4 rounded-[41px] bg-[#FCD980] text-[18px]">View our work</button>
                  </NavLink>
                  <div className="flex items-center gap-4">
                     <NavLink to="/pricing" className="text-[#fff]">
                        View Pricing
                     </NavLink>
                     <img src={arrow} alt="" />
                  </div>
               </div>
            </div>
            <div className="flex items-center">
               <img src={hero} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Hero;
