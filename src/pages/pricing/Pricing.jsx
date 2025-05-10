import React from "react";
import pointer from "../../assets/Pointer.png";

const Card1 = () => {
   return (
      <div className="bg-[#F4F6FC] px-12 py-16  rounded-[12px] flex flex-col">
         <div className="flex gap-2 items-center mb-5">
            <p className="text-[#282938] text-[38px] font-semibold">$299</p>
            <p className="text-[#2405F2]">Per Design</p>
         </div>

         <div className="text-[#282938] mb-[78px] flex-1">
            <h3 className="text-2xl mb-2">Landing page</h3>
            <p className="opacity-70">When you’re ready to go beyond prototyping in Figma.</p>
         </div>

         <div className="flex flex-1 flex-col gap-5 text-[#282938] mb-[78px]">
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>All limited links</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Own analytics platform</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Chat support</p>
            </div>
            <div className="flex gap-3">
               <img className="bg-linear-to-r from-[#fff] to-0% mix-blend-luminosity" src={pointer} alt="" />
               <p className="opacity-70">Optimize hashtags</p>
            </div>
            <div className="flex gap-3">
               <img className="bg-linear-to-r from-[#fff] to-0% mix-blend-luminosity" src={pointer} alt="" />
               <p className="opacity-70">Unlimited users</p>
            </div>
         </div>

         <div className="grid place-items-center">
            <button className="px-[77px] py-4 bg-[#282938] text-[#fff] rounded-[41px] text-[18px]">Get started</button>
         </div>
      </div>
   );
};

const Card2 = () => {
   return (
      <div className="bg-[#1C1E53] px-12 py-16  rounded-[12px] flex flex-col">
         <div className="flex gap-2 items-center mb-5">
            <p className="text-[#FFFFFF] text-[38px] font-semibold">$399</p>
            <p className="text-[#FCD980]">Multi Design</p>
         </div>

         <div className="text-[#FFFFFF] mb-[78px] flex-1">
            <h3 className="text-2xl mb-2">Website Page </h3>
            <p className="opacity-70">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
         </div>

         <div className="flex flex-1 flex-col gap-5 text-[#FFFFFF] mb-[78px]">
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>All limited links</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Own analytics platform</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Chat support</p>
            </div>
            <div className="flex gap-3">
               <img className="" src={pointer} alt="" />
               <p className="">Optimize hashtags</p>
            </div>
            <div className="flex gap-3">
               <img className="" src={pointer} alt="" />
               <p className="">Unlimited users</p>
            </div>
         </div>

         <div className="grid place-items-center">
            <button className="px-[77px] py-4 bg-[#FCD980] text-[#282938] rounded-[41px] text-[18px]">Get started</button>
         </div>
      </div>
   );
};

const Card3 = () => {
   return (
      <div className="bg-[#F4F6FC] px-12 py-16  rounded-[12px] flex flex-col">
         <div className="flex gap-2 items-center mb-5">
            <p className="text-[#282938] text-[38px] font-semibold">$499+</p>
            <p className="text-[#2405F2]">Per Design</p>
         </div>

         <div className="text-[#282938] mb-[78px] flex-1">
            <h3 className="text-2xl mb-2">Complex Project</h3>
            <p className="opacity-70">When you’re ready to go beyond prototyping in Figma,</p>
         </div>

         <div className="flex flex-col gap-5 text-[#282938] mb-[78px] flex-1">
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>All limited links</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Own analytics platform</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Chat support</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Optimize hashtags</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Unlimited users</p>
            </div>
            <div className="flex gap-3">
               <img src={pointer} alt="" />
               <p>Assist and Help</p>
            </div>
         </div>

         <div className="grid place-items-center">
            <button className="px-[77px] py-4 bg-[#282938] text-[#fff] rounded-[41px] text-[18px]">Contact us</button>
         </div>
      </div>
   );
};

const Pricing = () => {
   return (
      <section className="my-[128px]">
         <div className="container">
            <div className="grid place-items-center mb-[64px]">
               <div className="text-[#282938] flex flex-col gap-4 justify-center text-center max-w-[562px]">
                  <h3 className="text-5xl font-semibold">Our Pricing Plans</h3>
                  <p className="font-medium opacity-70">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
               <Card1 />
               <Card2 />
               <Card3 />
            </div>
         </div>
      </section>
   );
};

export default Pricing;
