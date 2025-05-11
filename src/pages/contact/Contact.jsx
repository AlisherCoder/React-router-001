import React from "react";

const Contact = () => {
   return (
      <section>
         <div className="container py-[128px] flex flex-col gap-16 justify-center items-center">
            <div className="max-w-[562px] text-[#282938] text-center">
               <h3 className="text-5xl font-semibold mb-4">Contact Us</h3>
               <p className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <form className="rounded-[12px] w-full bg-[#F4F6FC] px-[77px] py-[55px]">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="flex gap-1 flex-col">
                     <label className="text-[18px]" htmlFor="name">
                        Name
                     </label>
                     <input className="py-[18px] indent-8 border border-gray-400 rounded-[8px]" type="text" name="" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="flex gap-1 flex-col">
                     <label className="text-[18px]" htmlFor="email">
                        Email
                     </label>
                     <input className="py-[18px] indent-8 border border-gray-400 rounded-[8px]" type="text" name="" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="flex gap-1 flex-col">
                     <label className="text-[18px]" htmlFor="sub1">
                        Subject
                     </label>
                     <input className="py-[18px] indent-8 border border-gray-400 rounded-[8px]" type="text" name="" id="sub1" placeholder="Provide context" />
                  </div>
                  <div className="flex gap-1 flex-col">
                     <label className="text-[18px]" htmlFor="sub2">
                        Subject
                     </label>
                     <input className="py-[18px] indent-8 border border-gray-400 rounded-[8px]" type="text" name="" id="sub2" placeholder="Select subject" />
                  </div>
               </div>
               <div className="w-full flex flex-col gap-1.5 mb-8">
                  <label className="text-[18px]" htmlFor="msg">
                     Message
                  </label>
                  <textarea className="h-[138px] pt-[18px] indent-8 border border-gray-400 rounded-[8px]" name="" id="msg" placeholder="Write your  question here"></textarea>
               </div>
               <button className="border bg-[#282938] rounded-[41px] py-4 px-16 text-[#fff]  cursor-pointer">Send Message</button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
