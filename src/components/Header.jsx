import React from "react";
import confLogo from "../images/badge-header.svg";
const Header = () => {
  return (
    <section class="section-header border-b border-gray-800">
      <header>
        <div class="logo-header w-full">
          <img src={confLogo} alt="Logo conferencia" />
        </div>
      </header>
    </section>
  );
};

export default Header;
