import React from "react";
import Badge from "components/Badge";
import BadgeForm from "components/BadgeForm";
import header from "../images/badge-header.svg";
import { useState } from "react";
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
      <div className="hero_container flex items-center px-8 bg-no-repeat mb-4 h-48 text-white w-full">
        <img className="w-48" src={header} alt="" />
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2  sm:gap-4 gap-12">
          <Badge
            nombre={dataUser.firstName}
            apellido={dataUser.lastName}
            jobTitle={dataUser.jobTitle}
            twitter={dataUser.twitter}
            email={dataUser.email}
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
