import React from "react";
import astronauts from "../images/astronauts.svg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="hero_container flex flex-col text-white text-4xl font-light h-screen items-center justify-center text-center">
      <img className="w-1/2" src={astronauts} alt="page not found" />
      <h1>404 <br />
      OOPS PAGE NOT FOUND</h1>
      <Link className="text-green-500 text-2xl underline pt-2" to="/badge">Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
