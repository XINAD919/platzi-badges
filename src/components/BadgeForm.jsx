import React, { useRef } from "react";

const BadgeForm = ({ onChange, onSubmit, error, data }) => {
  const form = useRef(null);
  if (!data) {
    data = "";
  }
  return (
    <div className="text-center  w-9/12">
      <h1 className="text-gray-800 text-3xl font-light">New Attendant</h1>
      <form ref={form} onChange={onChange} onSubmit={onSubmit} className="mb-2">
        <div className="flex flex-col w-full mb-3">
          <label className="pb-2 self-start text-black" htmlFor="firstName">
            First Name
          </label>
          <input
            defaultValue={data.firstName}
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
            defaultValue={data.lastName}
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
            defaultValue={data.email}
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
            defaultValue={data.jobTitle}
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
            defaultValue={data.twitter}
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
        {error && <p className="text-red-600">{error.message}</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
