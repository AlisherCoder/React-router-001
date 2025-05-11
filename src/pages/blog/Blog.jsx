import React from "react";
import blog from "../../assets/blog.png";

const Blog = () => {
   return (
      <section>
         <div className="container py-[128px]">
            <div className="w-full flex flex-col justify-center items-center gap-8 text-[#232536] text-center">
               <div className="text-center max-w-[949px]">
                  <h3 className="text-5xl font-semibold leading-16">A UX Case Study on Creating a Studious Environment for Students</h3>
               </div>
               <p className="font-medium">Andrew Jonson Posted on 27th January 2021</p>
               <img src={blog} alt="" />
               <div className="text-center max-w-[831px]">
                  <p className="opacity-70">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
               </div>
               <a href="#" className="text-[#2405F2]">
                  Read more
               </a>
            </div>
         </div>
      </section>
   );
};

export default Blog;
