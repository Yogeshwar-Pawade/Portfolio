import React from "react";
import About from "../components/About";
import Heading from "../components/Heading";
import Fact from "../components/Fact";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Heading></Heading>
      <About></About>
      <Fact></Fact>
    </div>
  );
}

export default Hero;
