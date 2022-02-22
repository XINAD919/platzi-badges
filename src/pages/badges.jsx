import React, { useState, useEffect } from "react";
import confLogo from "images/badge-header.svg";
import BadgesList from "components/BadgesList";
import { Link } from "react-router-dom";
const Badges = () => {
  const [data, setData] = useState({
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    setData({ loading: true, error: null });
    try {
      const data = [];
      setData({ loading: false, data: data });
    } catch (error) {
      setData({ loading: false, error: error });
      console.error(error);
    }
  };

  if (data.loading) {
    return "Loading...";
  } else {
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
            <BadgesList badges={data.data} />
          </div>
        </div>
      </div>
    );
  }
};

export default Badges;
