import React, { useState, useEffect } from "react";
import Badge from "components/Badge";
import BadgeForm from "components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api";
import md5 from "md5";
import Loading from "components/Loading";

const BadgeEdit = () => {
  // id
  const { badgeId } = useParams();
  // para mandar a la pag de badges al dar submit
  const navigate = useNavigate();
  
  const [dataUser, setdataUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  // control del form
  const handdleChange = (e) => {
    setdataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    console.log("datos escritos", dataUser);
  };
// get
  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      try {
        const data = await api.badges.read(badgeId);
        setdataUser(data);
        setLoading(false);
        setEjecutarConsulta(false);
        console.log("datos obtenidos", dataUser);
        console.log("badge id", badgeId);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    if (ejecutarConsulta) {
      fetchInfo();
    }
  }, [ejecutarConsulta, badgeId, dataUser]);
// send
  const handdleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const hash = md5(dataUser.email);
      const avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
      await api.badges.update(badgeId, { ...dataUser, avatar });
      setLoading(false);
      navigate("/badges");
      console.log(dataUser);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <div className="h-screen w-full flex justify-center items-center">
          <Loading type={"spinningBubbles"} color={"#98CA3F"} />
        </div>
      </>
    );
  }

  return (
    <div className="h-auto bg-gray-50">
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
            <BadgeForm
              onSubmit={handdleSubmit}
              onChange={handdleChange}
              error={error}
              data={dataUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeEdit;
