import React from "react";
import facebook from "../../assets/face1.png";
import twitter from "../../assets/twit1.png";
import instagram from "../../assets/ins1.png";
import linkedin from "../../assets/lin1.png";

const Work = () => {
   return (
      <section className="bg-[#F4F6FC]">
         <div className="container py-[96px] grid place-items-center">
            <div className="flex flex-col gap-5 justify-center items-center w-full lg:w-[45%] text-center text-[#282938]">
               <p className="opacity-70 font-medium">What we created</p>
               <h3 className="text-5xl font-semibold">Our Work Portfolio</h3>
               <p className="opacity-70 font-medium">We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
               <div className="flex gap-7">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
                  <img src={linkedin} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Work;
