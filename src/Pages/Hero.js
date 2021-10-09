import React from "react";
import About from "../components/About";
import Heading from "../components/Heading";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
         <Heading></Heading> 
          <About></About>
    </div>
  );
}

export default Hero;
