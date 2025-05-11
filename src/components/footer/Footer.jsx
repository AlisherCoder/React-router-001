import React from "react";
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
   return (
      <footer className="bg-[#1C1E53]">
         <div className="container grid grid-cols-1 gap-[142px] pt-[96px] pb-[80px] md:grid-cols-2">
            <div className="pt-3">
               <img src={logo} alt="" className="mb-6" />
               <p className="text-[#BBBBCB] mb-[86px]">We are always open to discuss your project and improve your online presence.</p>
               <div className="py-4 bg-[#FCD980] flex gap-7 items-center pl-9">
                  <div className="">
                     <strong>Email me at</strong>
                     <p className="text-blue-950">contact@website.com</p>
                  </div>
                  <div>
                     <strong>Call us</strong>
                     <p className="text-blue-950">+1 (305) 123-4567</p>
                  </div>
               </div>
            </div>
            <div className="max-w-[389px]">
               <h3 className="text-[#fff] mb-3.5 text-[48px] font-semibold">Lets Talk!</h3>
               <p className="text-[#BBBBCB]">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
               <div className="flex gap-6 mt-7">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
                  <img src={linkedin} alt="" />
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
