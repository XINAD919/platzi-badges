import React, { useState } from "react";
import Badge from "components/Badge";
import BadgeForm from "components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
const BadgeNew = () => {
  const [dataUser, setdataUser] = useState({});

  const handdleChange = (e) => {
    setdataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    console.log("datos escritos", dataUser);
  };
  return (
    <>
      <div className="hero_container flex items-center justify-center px-8 bg-no-repeat mb-4 h-48 sm:h-56 text-white w-full">
        <img className="w-48 " src={header} alt="icono platzi conf" />
      </div>
      <Link to="/badges" className="ml-2 mb-2 sm:mb-0 sm:ml-3 w-4">
        <i className="fa-solid fa-arrow-left text-xl text-green-400" />
      </Link>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2  sm:gap-4 gap-12">
          <Badge
            nombre={dataUser.firstName || "First Name"}
            apellido={dataUser.lastName || "Last Name"}
            jobTitle={dataUser.jobTitle || "Job Title"}
            twitter={dataUser.twitter || "Twitter"}
            email={dataUser.email || ""}
            avatar="https://www.gravatar.com/avatar?d=identicon"
          />
          <div className="flex justify-center w-full">
            <BadgeForm onChange={handdleChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
