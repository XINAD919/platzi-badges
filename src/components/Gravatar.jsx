import React from "react";
import md5 from "md5";
const Gravatar = (props) => {
  const email = props.email;
  const hash = md5(email);

  return (
    <img
      className="avatar sm:w-full mx-auto rounded-full md:w-28"
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
};

export default Gravatar;
