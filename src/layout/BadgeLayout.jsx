import React from "react";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
const BadgeLayout = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BadgeLayout;
