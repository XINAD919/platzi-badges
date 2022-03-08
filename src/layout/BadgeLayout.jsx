import React from "react";
import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const BadgeLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default BadgeLayout;
