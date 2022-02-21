import React from "react";
import confLogo from "images/badge-header.svg";
import BadgesList from "components/BadgesList";
import { Link } from "react-router-dom";
const badges = () => {
  const data = [
    {
      id: "1",
      firstName: "Daniela",
      lastName: "Morales",
      email: "danimora@example.com",
      jobTitle: "Human Research",
      avatar: "https://www.gravatar.com/avatar?d=identicon",
      twitter: "clapwhitouthands87",
    },
    {
      id: "2",
      firstName: "Jesenia",
      lastName: "gutierrez",
      email: "jesegu@example.com",
      jobTitle: "backend developer",
      avatar: "https://www.gravatar.com/avatar?d=identicon",
      twitter: "golosita96",
    },
    {
      id: "3",
      firstName: "Steffany",
      lastName: "bedoya",
      email: "stefyb@example.com",
      jobTitle: "Devops Engineer",
      avatar: "https://www.gravatar.com/avatar?d=identicon",
      twitter: "stefy69",
    },
  ];
  console.log(data);
  return (
    <div className="h-full bg-gray-50">
      <div className="Badges  ">
        <div className="Badges__hero">
          <div className="Badges__container w-screen flex justify-center items-center h-48">
            <img className="w-48 mb-4" src={confLogo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-end py-3 px-2">
          <Link
            className="bg-green-500 px-8 py-2 rounded mb-2 hover:bg-green-600 shadow-xl text-white"
            to="/badge/new"
          >
            New Badge
          </Link>
        </div>
        <div className="container sm:mx-auto">
          <BadgesList badges={data} />
        </div>
      </div>
    </div>
  );
};

export default badges;
