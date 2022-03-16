import React, { useState, useEffect } from "react";
import confLogo from "images/badge-header.svg";
import BadgesList from "components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import Loading from "components/Loading";

const Badges = () => {
  const [Badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      setLoading(true);
      try {
        const data = await api.badges.list();
        console.log(data);
        setBadges(data);
        setLoading(false);
        console.log(Badges);
        setEjecutarConsulta(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };

    if (ejecutarConsulta) {
      fetchBadges();
    }
  }, [ejecutarConsulta, Badges, error]);

  if (error) {
    return (
      <>
        <div className="h-96 flex items-center justify-center">
          <h1 className="text-2xl">{`${error}`}</h1>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <Loading type={"spinningBubbles"} color={"#98CA3F"} />
        </div>
      </>
    );
  }

  return (
    <div className="h-auto bg-gray-50">
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container flex flex-col justify-center items-center h-56">
            <img className="w-48 sm:w-56 mb-4" src={confLogo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-end py-3 px-2">
          {Badges.length !== 0 ? (
            <Link
              className="bg-green-500 px-8 py-2 rounded mb-2 hover:bg-green-600 shadow-xl text-white"
              to="/badges/new"
            >
              New Badge
            </Link>
          ) : (
            <>
              <h1 className="m-auto">No hay badges aún</h1>
              <Link
                className="bg-green-500 px-8 py-2 rounded mb-2 hover:bg-green-600 shadow-xl text-white"
                to="/badges/new"
              >
                Create New Badge
              </Link>
            </>
          )}
        </div>
        <div className="container sm:mx-auto">
          <BadgesList badges={Badges} />
        </div>
      </div>
    </div>
  );
};

export default Badges;
