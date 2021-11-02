import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Badge = () => {
  return (
    <div class="container flex flex-col bg-gray-800 h-screen justify-center items-center">
      <div className="ctn-badge w-1/2 sm:w-full border bg-gray-50 border-red-500 rounded-xl">
        <Header />
        <section class=" flex flex-col section-title ">
          <div class="flex flex-row justify-center items-center">
            <div class=" img-user flex justify-center">
              <img
                class="avatar"
                src="https://www.gravatar.com/avatar?d=identicon"
                alt="Avatar"
              />
            </div>
            <div class="user-name">
              <h1>
                Daniel <br />
                Castaño
              </h1>
            </div>
          </div>
          <div class="info-user">
            <p>Junior Frontend Enginieer</p>
            <p class="twitter">@Da_919</p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Badge;
