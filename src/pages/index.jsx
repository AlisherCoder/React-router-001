import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import React from "react";
import About from "./about/About";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Pricing from "./pricing/Pricing";
import Work from "./work/Work";
import Home from "./home/Home";

const MainRouters = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<div>404</div>} />
         </Route>
      </Routes>
   );
};

export default MainRouters;
