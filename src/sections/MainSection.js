import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import ThankYou from "../components/ThankYou";
import NavBar from "../components/NavBar";

const MainSection = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <ThankYou />
    </div>
  );
};

export default MainSection;
