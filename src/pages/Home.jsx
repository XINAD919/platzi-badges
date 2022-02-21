import React from "react";
import astronauts from "../images/astronauts.svg";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero_container h-full ">
      <div className="container h-full mx-auto text-white flex justify-center">
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col justify-center sm:items-start items-center">
            <img className="mb-2" src={confLogo} alt="paltzi conf logo" />
            <h1 className="text-4xl mb-2 w-72 sm:w-auto">
              Badge Management System
            </h1>
            <Link className="bg-green-500 px-14 py-2 rounded" to="/badge">
              Start
            </Link>
          </div>
          <div className="sm:flex sm:justify-center hidden">
            <img className="w-11/12 sm:w-auto" src={astronauts} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
