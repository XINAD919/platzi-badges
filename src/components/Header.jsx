import React from "react";
import confLogo from "../images/badge-header.svg";
const Header = () => {
  return (
    <section className="section-header">
      <header>
        <div className="logo-header flex justify-center items-center bg-gray-800 h-20 rounded-t-xl">
          <img src={confLogo} alt="Logo conferencia" />
        </div>
      </header>
    </section>
  );
};

export default Header;
