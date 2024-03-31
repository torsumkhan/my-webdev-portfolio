import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";

const MainSection = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
    </div>
  );
};

export default MainSection;
