import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./home/Footer";
import Navbar from "./home/Navbar";
import Navbar1 from "./home/Navbar1";
import HideLinks from "./home/HideLinks";
const Layout = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
