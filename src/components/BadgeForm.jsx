import React, { useState, useEffect, useRef } from "react";
import api from "api";
import md5 from "md5";
import { toast,ToastContainer } from "react-toastify";

const BadgeForm = ({ onChange }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const obj = {};
    fd.forEach((value, key) => {
      obj[key] = value;
    });
    console.log("datos enviados del form", obj);
    const hash = md5(obj.email);
    const avatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    const objConAvatar = { ...obj, avatar };

    const Sendbadge = await api.badges.create(objConAvatar);
    Sendbadge
      ? toast.success("Badge creado con exito")
      : toast.error("Error creando Badge");
  };
 
  return (
    <div className="text-center  w-9/12">

      <h1 className="text-gray-800 text-3xl font-light">New Attendant</h1>
      <form
        ref={form}
        onChange={onChange}
        onSubmit={submitForm}
        className="mb-2"
      >
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="firstName">
            First Name
          </label>
          <input
            required
            className="border pl-3 border-gray-300 h-9 rounded-md"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="lastName">
            Last Name
          </label>
          <input
            required
            className="border pl-3 border-gray-300 h-9 rounded-md"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="email">
            Email
          </label>
          <input
            required
            className="border pl-3 border-gray-300 h-9 rounded-md"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            required
            className="border pl-3 border-gray-300 h-9 rounded-md"
            type="text"
            name="jobTitle"
            id="jobTitle"
          />
        </div>
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="twitter">
            Twitter
          </label>
          <input
            required
            className="border pl-3 border-gray-300 h-9 rounded-md"
            type="text"
            name="twitter"
            id="twitter"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-2 w- py-1 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
