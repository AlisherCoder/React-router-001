import React from "react";
import about from "../../assets/about1.png";
import about2 from "../../assets/about2.png";

const About = () => {
   return (
      <section className="">
         <div className="grid grid-cols-2 container gap-12 py-[128px]">
            <div className="flex flex-col justify-center pt-6 pb-2.5 text-[#282938]">
               <strong className="text-[18px] font-medium pb-2">About us</strong>
               <h2 className="text-[54px] font-semibold leading-[74px] pb-8">Our designs solve problems</h2>
               <p className="pr-[114px] opacity-70 font-normal leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="">
               <img src={about} alt="" />
            </div>
         </div>

         <div className="container mb-[128px]">
            <div className="grid grid-cols-2 px-20 py-24 gap-[61px] text-[#282938] w-full bg-[#F4F5F5]">
               <div className="flex flex-col gap-4">
                  <h3 className="text-[38px] font-semibold">Goal focussed</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
               <div className="flex flex-col gap-4">
                  <h3 className="text-[38px] font-semibold">Continuous improvement</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
            </div>
            <div className="w-full">
               <img className="w-full" src={about2} alt="" />
            </div>
         </div>
      </section>
   );
};

export default About;
