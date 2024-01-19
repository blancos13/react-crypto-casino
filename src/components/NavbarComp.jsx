import React from "react";
import Discord from "../pages/Discord";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarComp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/discord" element={<Discord />}></Route>
      </Routes>
    </div>
  );
};

export default NavbarComp;
