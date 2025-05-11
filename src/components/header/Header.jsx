import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./style.css";

const navbar = [
   { title: "home", to: "/" },
   { title: "about us", to: "/about" },
   { title: "pricing", to: "/pricing" },
   { title: "work", to: "/work" },
   { title: "blog", to: "/blog" },
];

const Header = () => {
   const [toggleNav, setToggleNav] = useState(false);

   return (
      <header className="w-full bg-[#1C1E53]">
         <nav className="container min-h-[92px] text-[#BBBBCB] flex items-center justify-between">
            <div>
               <NavLink to="/">
                  <img src={logo} alt="" />{" "}
               </NavLink>
            </div>
            <ul className={`flex gap-[40px] items-center max-[800px]:fixed max-[800px]:w-[180px] max-[800px]:top-0 max-[800px]:h-screen bg-[#1C1E53] max-[800px]:flex-col max-[800px]:pt-10 duration-300 ${toggleNav ? "max-[800px]:left-0" : "max-[800px]:-left-[180px]"}`}>
               {navbar.map((nav) => (
                  <li>
                     <NavLink onClick={() => setToggleNav(false)} className="header_link capitalize" to={nav.to}>
                        {nav.title}
                     </NavLink>
                  </li>
               ))}
               <li className="border-[2px] border-[#F4F6FC33] px-12 py-4 rounded-[41px] border-opacity-20">
                  <NavLink onClick={() => setToggleNav(false)} className="header_link" to="/contact">
                     Contact Us
                  </NavLink>
               </li>
            </ul>
            <button className="hidden max-[800px]:block" onClick={() => setToggleNav((p) => !p)}>
               <div className="w-8 h-1 bg-[#BBBBCB] mt-0.5 rounded"></div>
               <div className="w-8 h-1 bg-[#BBBBCB] mt-0.5 rounded"></div>
               <div className="w-8 h-1 bg-[#BBBBCB] mt-0.5 rounded"></div>
            </button>
         </nav>
      </header>
   );
};

export default Header;
