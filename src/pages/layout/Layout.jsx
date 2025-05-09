import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../../components/hero/Hero";

const Layout = () => {
   return (
      <>
         <Header />
         <Hero />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default Layout;
