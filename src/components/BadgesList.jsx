import React from "react";
import { Link } from "react-router-dom";
const BadgesList = ({ badges }) => {
  return (
    <div>
      <ul>
        {badges.map((badge) => {
          return (
            <Link to={`${badge.id}/edit`} key={badge.id}>
              <div className="flex flex-row bg-white mb-3 h-32 items-center shadow-md rounded">
                <div className="">
                  <img
                    className="rounded-full mx-4"
                    src={badge.avatar}
                    alt={`Avatar de ${badge.firstName}`}
                  />
                </div>
                <div className="mx-2">
                  <h2 className=" sm:text-xl font-extralight">
                    {`${badge.firstName} 
                ${badge.lastName}`}
                  </h2>

                  <p className="twitter text-blue-500 font-normal sm:text-lg">
                    <i className="fab fa-twitter text-blue-600 text-xl sm:text-2xl mr-1"></i>
                    @{badge.twitter}
                  </p>
                  <p>{badge.jobTitle}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default BadgesList;
