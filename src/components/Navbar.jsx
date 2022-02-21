import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex w-full h-14 bg-gray-800 ">
      <Link className="text-white flex items-center ml-5" to="/">
        <img src={logo} alt="logo" />
        <span className="font-light opacity-50  ml-2">Platzi</span>
        <span className="font-bold">Conf</span>
      </Link>
    </div>
  );
};

export default Navbar;
