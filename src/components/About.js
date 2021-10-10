import React from "react";

import "./About.css";
import Resume from "../Resume.pdf"

function About() {
  return (
    <div className="About">
      <div className="Aboutleft">
        <img src="https://picsum.photos/420/650"></img>
      </div>
      <div className="Aboutright">
        <h1 className="Aboutheading">
          Specialization in Artificial Intelligence & Machine Learning,
        </h1>
        <h1 className="Aboutheading">Highly Innovative Web Developer</h1>
        <hr className="Aboutline"></hr>
        <p className="Detail">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          suscipit officiis hic, dolor pariatur odio deleniti nostrum aliquam,
          qui quam aliquid harum culpa eveniet delectus, ipsum enim modi ullam
          maxime!
        </p>
        <div>
          <div>
            <div>Leadership</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              placeat numquam perferendis fugiat delectus aut dolore earum magni
              illum adipisci eligendi esse, iure ipsum ullam possimus commodi
              optio aperiam excepturi.
            </div>
          </div>
          <div>
            <div>AI/ML</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              assumenda dolores ea, aliquid alias, eum ipsam temporibus minima
              cupiditate eaque ab expedita odio. Neque, laudantium impedit
              labore harum libero non!
            </div>
          </div>
          <div>
            <div>Web Development</div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              placeat numquam perferendis fugiat delectus aut dolore earum magni
              illum adipisci eligendi esse, iure ipsum ullam possimus commodi
              optio aperiam excepturi.
            </div>
          </div>
          <div>
            <div>Sports/esports</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              assumenda dolores ea, aliquid alias, eum ipsam temporibus minima
              cupiditate eaque ab expedita odio. Neque, laudantium impedit
              labore harum libero non!
            </div>
          </div>
        </div>
        <a className="Download" href={Resume} download="Yogeshwar's Resume.pdf">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
