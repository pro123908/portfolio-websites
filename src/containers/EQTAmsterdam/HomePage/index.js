import React from "react";
import Landing from "../../../components/ETQAmsterdam/HomePage/Landing";

const HomePage = () => {
  return (
    <div
      onScroll={() => console.log("Scrolled")}
      className="etq-amsterdam-home-page"
    >
      <Landing />
    </div>
  );
};

export default HomePage;
