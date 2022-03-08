import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Gravatar from "./Gravatar";

const Badge = ({ nombre, apellido, avatar, jobTitle, twitter,email }) => {
  return (
    <div className="flex flex-col sm:h-screen items-center">
      <div className="ctn-badge w-full sm:w-full  bg-gray-50 rounded-xl shadow">
        <Header />
        <section className=" flex flex-col section-title ">
          <div className="flex flex-row justify-center items-center py-8">
            <div className=" img-user w-1/2 ">
             <Gravatar 
              email={email} />
            </div>
            <div className="user-name md:text-5xl sm:text-3xl w-1/2 text-3xl font-bold text-gray-800">
              <h1>
                {nombre} <br />
                {apellido}
              </h1>
            </div>
          </div>
          <div className="info-user flex flex-col  items-center text-lg bg-gray-100">
            <h3 className="font-light">{jobTitle}</h3>
            <p className="twitter text-blue-500 font-semibold">
              <i className="fab fa-twitter text-blue-600 "></i>@{twitter}
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Badge;
