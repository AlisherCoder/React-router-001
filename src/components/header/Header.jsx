import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./style.css";

const Header = () => {
   return (
      <header className="w-full bg-[#1C1E53]">
         <nav className="container min-h-[92px] text-[#BBBBCB] flex items-center justify-between">
            <div>
               <NavLink to="/">
                  <img src={logo} alt="" />{" "}
               </NavLink>
            </div>
            <ul className="flex gap-[40px] items-center">
               <li>
                  <NavLink className="header_link" to="/">
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink className="header_link" to="/about">
                     About us
                  </NavLink>
               </li>
               <li>
                  <NavLink className="header_link" to="/pricing">
                     Pricing
                  </NavLink>
               </li>
               <li>
                  <NavLink className="header_link" to="/work">
                     Work
                  </NavLink>
               </li>
               <li>
                  <NavLink className="header_link" to="/blog">
                     Blog
                  </NavLink>
               </li>
               <li className="border-[2px] border-[#F4F6FC33] px-12 py-4 rounded-[41px] border-opacity-20">
                  <NavLink className="header_link" to="/contact">
                     Contact
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
